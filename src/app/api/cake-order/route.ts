import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { sendCakeOrderNotification } from '@/lib/resend'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  pickupDate: z.string(),
  size: z.enum(['6-inch', '8-inch', 'quarter-sheet', 'half-sheet']),
  flavors: z.string().min(2),
  dedication: z.string().optional(),
  message: z.string().optional(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    const order = await db.cakeOrder.create({
      data: { ...data, pickupDate: new Date(data.pickupDate) },
    })

    await sendCakeOrderNotification({ ...data, pickupDate: new Date(data.pickupDate) })

    return NextResponse.json({ success: true, id: order.id })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
    }
    return NextResponse.json({ error: 'Failed to submit order' }, { status: 500 })
  }
}
