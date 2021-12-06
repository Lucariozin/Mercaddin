import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import { stripe } from "../../services/stripe";

import { query as q } from 'faunadb';
import { fauna } from '../../services/fauna';

import { ProductOfCart } from '../../types/Product';

type StripeCustomer = {
  id: string;
  email: string;
};

const Payment = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') return res.status(400);

  const session = await getSession({ req });

  if (!session) return res.status(401);

  const { selectedProducts }: { selectedProducts: ProductOfCart[] } = req.body;

  if (!selectedProducts) return res.status(400);

  const line_items = selectedProducts.map((prod) => {
    return {
      price: prod.stripePriceId,
      quantity: prod.amountProducts,
    };
  });

  const stripeCustomer = await createCustomer(session.user.email);

  const stripeCheckoutSession = await stripe.checkout.sessions.create({
    customer: stripeCustomer.id,
    payment_method_types: ['card'],
    line_items,
    mode: 'payment',
    allow_promotion_codes: false,
    success_url: `${process.env.VERCEL_URL}?clear=true`,
    cancel_url: process.env.VERCEL_URL,
  });

  return res.status(200).json({
    sessionId: stripeCheckoutSession.id
  });
}

export default Payment;

async function createCustomer(email: string): Promise<StripeCustomer> {
  try {
    const customer: { data: StripeCustomer } = await fauna.query(
      q.Get(
        q.Match(
          q.Index('customer-by-email'), q.Casefold(email)
        )
      )
    );

    return customer.data;

  } catch {

    const stripeCustomer = await stripe.customers.create({ email });

    await fauna.query(
      q.Create(
        q.Collection('customers'),
        { data: { id: stripeCustomer.id, email: stripeCustomer.email } }
      )
    );

    return {
      id: stripeCustomer.id,
      email: stripeCustomer.email,
    };
  }
}
