import { NextApiRequest, NextApiResponse } from 'next';
import { query as q } from 'faunadb';
import { fauna } from '../../../services/fauna';
import { ProductOfCart } from '../../../types/Product';

const getCart = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') return res.status(400);
  if (!req.body.email) return res.status(400);

  try {
    const { data }: { data: { products: ProductOfCart[] } } = await fauna.query(
      q.Get(
        q.Match(q.Index('items-of-cart-by-customer-email'), q.Casefold(req.body.email))
      )
    );
    
    return res.json({
      itemsOfCart: data.products,
    });
    
  } catch {
    return res.json({
      itemsOfCart: [],
    });
  }
};

export default getCart;
