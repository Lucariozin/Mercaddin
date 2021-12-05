import * as Styled from './styles';

import Router from 'next/router';

interface ProductCardProps {
  slug: string;
  name: string;
  img: string;
  price: string;
  discount: number;
  oldPrice: string;
}

export function ProductCard({ slug, name, img, price, oldPrice, discount }: ProductCardProps) {
  return (
    <Styled.Container onClick={() => Router.push(`/products/${slug}`)}>
      <Styled.ImgContainer style={{ 'backgroundImage': `url(${img})` }}>
        
      </Styled.ImgContainer>
      
      <Styled.Content>
        <Styled.Name>{name}</Styled.Name>

        <Styled.Separation />

        <Styled.PriceContainer>
          <Styled.Price>{price}</Styled.Price>
          
          {discount > 0 && (
            <Styled.Discount>{discount}%</Styled.Discount>
          )}

          {discount > 0 && (
            <Styled.OldPrice>{oldPrice}</Styled.OldPrice>
          )}
        </Styled.PriceContainer>

      </Styled.Content>
    </Styled.Container>
  );
}
