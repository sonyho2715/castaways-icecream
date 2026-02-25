import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    const menu = await db.dailyMenu.findFirst({
      where: {
        published: true,
        date: { gte: today, lt: tomorrow },
      },
      include: {
        flavors: { orderBy: { sortOrder: 'asc' } },
      },
    })

    return NextResponse.json({ menu })
  } catch {
    return NextResponse.json({ menu: null })
  }
}
