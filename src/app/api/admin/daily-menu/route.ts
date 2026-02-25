import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/auth'
import { db } from '@/lib/db'
import { z } from 'zod'

const menuSchema = z.object({
  note: z.string().optional(),
  flavors: z.array(z.object({
    name: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    soldOut: z.boolean().default(false),
    sortOrder: z.number().default(0),
  })),
})

export async function POST(req: NextRequest) {
  try {
    await requireAdmin()
    const body = await req.json()
    const data = menuSchema.parse(body)

    // Delete today's existing menu if any
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    await db.dailyMenu.deleteMany({
      where: { date: { gte: today, lt: tomorrow } },
    })

    const menu = await db.dailyMenu.create({
      data: {
        note: data.note,
        flavors: {
          create: data.flavors,
        },
      },
      include: { flavors: true },
    })

    return NextResponse.json({ success: true, menu })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to save menu' }, { status: 500 })
  }
}

export async function GET() {
  try {
    await requireAdmin()
    const menus = await db.dailyMenu.findMany({
      include: { flavors: { orderBy: { sortOrder: 'asc' } } },
      orderBy: { date: 'desc' },
      take: 7,
    })
    return NextResponse.json({ menus })
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
}
