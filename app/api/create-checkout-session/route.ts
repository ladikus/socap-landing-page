import { NextResponse } from 'next/server'

// Rezerwacja konsultacji SoCap (opłata testowa: 1 zł / 100 groszy).
//
// Stripe nie jest jeszcze podłączony do tego projektu. Gdy dodasz integrację
// Stripe (oraz zmienne STRIPE_SECRET_KEY i NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY),
// zastąp poniższy kod tworzeniem sesji Stripe Checkout:
//
//   const session = await stripe.checkout.sessions.create({
//     mode: 'payment',
//     line_items: [{
//       price_data: {
//         currency: 'pln',
//         unit_amount: 100,
//         product_data: { name: 'SoCap Onboarding Call — Konsultacja' },
//       },
//       quantity: 1,
//     }],
//     success_url: `${origin}/success`,
//     cancel_url: `${origin}/`,
//   })
//   return NextResponse.json({ url: session.url })

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}))

  // Tutaj można zapisać zgłoszenie (CRM / baza / e-mail) zanim ruszy płatność.
  console.log('[v0] Nowa rezerwacja konsultacji:', body)

  return NextResponse.json({ url: '/success' })
}
