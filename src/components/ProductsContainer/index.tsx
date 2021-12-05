import * as Styled from './styles';

import { ProductCard } from '../ProductCard';

import { ProductType } from '../../types/Product';

interface ProductsContainerProps {
  products: ProductType[];
}

export function ProductsContainer({ products }: ProductsContainerProps) {
  return (
    <Styled.Container>
      <Styled.Wrapper>

        {products.map((product) => (
          <ProductCard
            key={product.slug}
            slug={product.slug}
            name={product.name}
            img={product.imgArray[0]}
            price={product.price}
            oldPrice={product.oldPrice}
            discount={product.discount}
          />
        ))}

      </Styled.Wrapper>
    </Styled.Container>
  );
}
