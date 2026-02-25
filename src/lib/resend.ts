import { Resend } from 'resend'

function getResend() {
  if (!process.env.RESEND_API_KEY) return null
  return new Resend(process.env.RESEND_API_KEY)
}

export async function sendCateringNotification(inquiry: {
  name: string
  email: string
  phone?: string
  eventType: string
  eventDate?: Date
  guestCount: string
  message?: string
}) {
  const resend = getResend()
  if (!resend) return

  await resend.emails.send({
    from: 'Castaways Website <noreply@castawaysicecream.com>',
    to: ['robert@castawaysicecream.com'],
    subject: `New Catering Inquiry from ${inquiry.name}`,
    html: `
      <h2>New Catering Inquiry</h2>
      <p><strong>Name:</strong> ${inquiry.name}</p>
      <p><strong>Email:</strong> ${inquiry.email}</p>
      <p><strong>Phone:</strong> ${inquiry.phone || 'Not provided'}</p>
      <p><strong>Event Type:</strong> ${inquiry.eventType}</p>
      <p><strong>Guest Count:</strong> ${inquiry.guestCount}</p>
      <p><strong>Message:</strong> ${inquiry.message || 'None'}</p>
    `,
  })
}

export async function sendCakeOrderNotification(order: {
  name: string
  email: string
  phone: string
  pickupDate: Date
  size: string
  flavors: string
  dedication?: string
}) {
  const resend = getResend()
  if (!resend) return

  await resend.emails.send({
    from: 'Castaways Website <noreply@castawaysicecream.com>',
    to: ['robert@castawaysicecream.com'],
    subject: `New Ice Cream Cake Order from ${order.name}`,
    html: `
      <h2>New Cake Order</h2>
      <p><strong>Name:</strong> ${order.name}</p>
      <p><strong>Email:</strong> ${order.email}</p>
      <p><strong>Phone:</strong> ${order.phone}</p>
      <p><strong>Pickup Date:</strong> ${order.pickupDate.toLocaleDateString()}</p>
      <p><strong>Size:</strong> ${order.size}</p>
      <p><strong>Flavors:</strong> ${order.flavors}</p>
      <p><strong>Dedication:</strong> ${order.dedication || 'None'}</p>
    `,
  })
}
