import { NextApiRequest, NextApiResponse } from 'next';
import { ProductType } from '../../../../types/Product';
import { products } from '../_products';

const searchForProducts = (req: NextApiRequest, res: NextApiResponse) => {
  const { character } = req.query;

  const wantedProducts: ProductType[] = [];

  products.forEach((product) => {
    const productName = product.name.toLowerCase();
    const char = String(character).toLowerCase();

    if (productName.indexOf(char) != -1) {
      wantedProducts.push(product);
    }
  });

  return res.json(wantedProducts);
};

export default searchForProducts;
