import { NextApiRequest, NextApiResponse } from 'next';
import { products } from './_products';

const getProductBySlug = (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;

  let requestedProduct = {};

  products.forEach((product) => {
    if (product.slug === slug) {
      requestedProduct = product;
    }
  });

  return res.json({
    product: requestedProduct,
  });
}

export default getProductBySlug;
