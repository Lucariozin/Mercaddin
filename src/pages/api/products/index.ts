import { NextApiRequest, NextApiResponse } from 'next';
import { products } from './_products';

const getAllProducts = (req: NextApiRequest, res: NextApiResponse) => {
  return res.json(products);
};

export default getAllProducts;
