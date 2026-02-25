import { redirect } from 'next/navigation'
import { getAdminSession } from '@/lib/auth'

export default async function AdminPage() {
  const session = await getAdminSession()
  if (!session.isLoggedIn) redirect('/admin/login')
  redirect('/admin/dashboard')
}
