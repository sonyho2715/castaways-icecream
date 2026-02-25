import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { getAdminSession } from '@/lib/auth'

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()

  const validEmail = email === process.env.ADMIN_EMAIL
  const validPassword = process.env.ADMIN_PASSWORD_HASH
    ? await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH)
    : password === 'castaways2024' // default for initial setup

  if (!validEmail || !validPassword) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  }

  const session = await getAdminSession()
  session.isLoggedIn = true
  session.userId = 'admin'
  session.email = email
  await session.save()

  return NextResponse.json({ success: true })
}
