import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}))
    const origin = request.headers.get('origin') || 'https://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      locale: 'pl',
      line_items: [
        {
          price_data: {
            currency: 'pln',
            unit_amount: 100,
            product_data: {
              name: 'SoCap Onboarding Call — Konsultacja',
              description: '60-minutowa konsultacja telefoniczna z ekspertem SoCap',
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        company: body.company ?? '',
        email: body.email ?? '',
        phone: body.phone ?? '',
        employees: body.employees ?? '',
      },
      customer_email: body.email || undefined,
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/`,
    })

    return NextResponse.json({ url: session.url })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Stripe error'
    console.error('[Stripe]', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
