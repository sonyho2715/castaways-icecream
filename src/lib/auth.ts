import { getIronSession, IronSession } from 'iron-session'
import { cookies } from 'next/headers'

export interface AdminSession {
  userId: string
  email: string
  isLoggedIn: boolean
}

const sessionOptions = {
  password: process.env.SESSION_SECRET!,
  cookieName: 'castaways_admin',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'lax' as const,
    maxAge: 60 * 60 * 24 * 7,
  },
}

export async function getAdminSession(): Promise<IronSession<AdminSession>> {
  return getIronSession<AdminSession>(await cookies(), sessionOptions)
}

export async function requireAdmin() {
  const session = await getAdminSession()
  if (!session.isLoggedIn) {
    throw new Error('Unauthorized')
  }
  return session
}
