import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { sendCateringNotification } from '@/lib/resend'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  eventType: z.string(),
  eventDate: z.string().optional(),
  // Accept both field name conventions (frontend sends estimatedGuests/flavorPreferences/budgetRange)
  guestCount: z.string().optional(),
  estimatedGuests: z.string().optional(),
  budget: z.string().optional(),
  budgetRange: z.string().optional(),
  flavors: z.string().optional(),
  flavorPreferences: z.string().optional(),
  message: z.string().optional(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    // Normalize field names from frontend to database columns
    const guestCount = data.guestCount || data.estimatedGuests || ''
    const budget = data.budget || data.budgetRange
    const flavors = data.flavors || data.flavorPreferences

    const inquiry = await db.cateringInquiry.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        eventType: data.eventType,
        eventDate: data.eventDate ? new Date(data.eventDate) : undefined,
        guestCount,
        budget,
        flavors,
        message: data.message,
      },
    })

    await sendCateringNotification({
      name: data.name,
      email: data.email,
      phone: data.phone,
      eventType: data.eventType,
      eventDate: data.eventDate ? new Date(data.eventDate) : undefined,
      guestCount,
      message: data.message,
    })

    return NextResponse.json({ success: true, id: inquiry.id })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
    }
    console.error(error)
    return NextResponse.json({ error: 'Failed to submit inquiry' }, { status: 500 })
  }
}
