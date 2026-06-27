import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}))
    const origin = request.headers.get('origin') || 'https://socap-landing-page.vercel.app'

    const params = new URLSearchParams({
      'mode': 'payment',
      'locale': 'pl',
      'line_items[0][price_data][currency]': 'pln',
      'line_items[0][price_data][unit_amount]': '100',
      'line_items[0][price_data][product_data][name]': 'SoCap Onboarding Call — Konsultacja',
      'line_items[0][quantity]': '1',
      'success_url': `${origin}/success`,
      'cancel_url': `${origin}/`,
      'customer_email': body.email || '',
      'metadata[company]': body.company || '',
      'metadata[phone]': body.phone || '',
      'metadata[employees]': body.employees || '',
    })

    const res = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    })

    const session = await res.json()

    if (!res.ok) {
      console.error('[Stripe]', session)
      return NextResponse.json({ error: session.error?.message }, { status: 500 })
    }

    return NextResponse.json({ url: session.url })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
