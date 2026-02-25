import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
  alerts: z.boolean().default(true),
})

export async function POST(req: NextRequest) {
  try {
    const data = schema.parse(await req.json())

    await db.emailSubscriber.upsert({
      where: { email: data.email },
      update: { alerts: data.alerts },
      create: data,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }
}
