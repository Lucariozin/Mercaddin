import { NextApiRequest, NextApiResponse } from 'next';

import { query as q } from 'faunadb';
import { fauna } from '../../../services/fauna';

const setCart = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') return res.status(400);
  if (!req.body.email) return res.status(400);

  return new Promise(async (resolve) => {
    try {
      const customerRef = await fauna.query(
        q.Select(
          'ref',
          q.Get(
            q.Match(
              q.Index('items-of-cart-by-customer-email'),
              req.body.email
            )
          )
        )
      );
  
      await fauna.query(
        q.Update(
          customerRef,
          {
            data: { ...req.body },
          }
        )
      )
    
      res.status(200).end();
      return resolve(true);
  
    } catch {
  
      await fauna.query(
        q.Create(
          q.Collection('carts'), { data: { ...req.body } }
        )
      )
  
      res.status(200).end();
      return resolve(true);
    }
  });
};

export default setCart;
