import { NextRequest, NextResponse } from 'next/server'

const SYSTEM_PROMPT = `You are the friendly AI assistant for Castaways Ice Cream in Honolulu, Hawaii.
You help customers with questions about the shop.

ABOUT CASTAWAYS:
- Owner: Robert Duong (doctor turned ice cream maker)
- Location: 2346 South King St, Honolulu HI 96826 (corner of Isenberg & South King, Moiliili neighborhood)
- Near UH Manoa campus
- Phone: (808) 744-1001
- Hours: Mon-Thu 2PM-10PM, Fri 2PM-Midnight, Sat 12PM-Midnight, Sun 12PM-10PM
- UH Manoa students get 10% off with student ID
- Instagram: @castawaysicecream

MENU & PRICING:
- Keiki (kids) scoop: $3.99
- Regular scoop: $5.99
- Large scoop: $8.49
- Milkshakes: $9.75
- Freshly baked waffle cones (made in-house)

FLAVORS (rotating, 14+ options):
Pandan Coconut, Salted Caramel, Birthday Cake, Matcha Green Tea, Blackberry Pie, Dark Chocolate, Vanilla Bean (Madagascar), Chocolate Chip Cookie, Rum Raisin, Mint Chocolate Chip, Pistachio, Strawberry Banana, Payday, Mango, Ube

VIBE:
- Homemade, small batch, no artificial dyes
- Cozy interior with piano, claw machine, board games
- Family-run, warm aloha spirit
- Freshly baked waffle cones fill the air with a warm, buttery aroma

Keep responses friendly, brief (2-3 sentences max), and in the spirit of Hawaiian hospitality.
If asked about today's flavors, explain they rotate and suggest following @castawaysicecream on Instagram for daily updates.
If you don't know something, invite them to call (808) 744-1001.`

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json({
        reply: "Hi! For today's flavors and questions, give us a call at (808) 744-1001 or follow @castawaysicecream on Instagram!"
      })
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 256,
        system: SYSTEM_PROMPT,
        messages: messages.slice(-6),
      }),
    })

    const data = await response.json()
    const reply = data.content?.[0]?.text || "Aloha! Give us a call at (808) 744-1001 for more info."

    return NextResponse.json({ reply })
  } catch {
    return NextResponse.json({
      reply: "Aloha! Give us a call at (808) 744-1001 or follow us @castawaysicecream for the latest!"
    })
  }
}
