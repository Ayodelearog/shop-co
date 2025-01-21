import { Product } from "@/lib/store"
import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia", // Use the latest API version
})

export async function POST(req: Request) {
  if (req.method === "POST") {
    try {
      const { items, email } = await req.json()

      const transformedItems = items.map((item: Product) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.title,
            images: [item.image],
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      }))

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: transformedItems,
        mode: "payment",
        success_url: `${req.headers.get("origin")}/order-confirmation?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.get("origin")}/cart`,
        metadata: {
          email,
        },
      })

      return NextResponse.json({ id: session.id })
    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : "An unknown error occurred"
        return NextResponse.json({ error: errorMessage }, { status: 500 })
    }
  } else {
    return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 })
  }
}

