import { NextResponse } from 'next/server'
import Stripe from 'stripe'

let stripe: Stripe | null = null
function getStripe() {
  if (!stripe) {
    stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
      apiVersion: '2025-09-30.clover',
    })
  }
  return stripe
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}))

  const origin =
    request.headers.get('origin') ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    'http://localhost:3000'

  try {
    const session = await getStripe().checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'pln',
            unit_amount: 100,
            product_data: { name: 'SoCap Onboarding Call' },
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/success`,
      cancel_url: `${origin}/`,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('[stripe] Checkout session error:', error)
    return NextResponse.json(
      { error: 'Nie udało się utworzyć sesji płatności.' },
      { status: 500 },
    )
  }
}
