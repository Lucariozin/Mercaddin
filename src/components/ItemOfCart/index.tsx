import * as Styled from './styles';
import { useEffect, useState } from 'react';

import { AmountProducts } from '../AmountProducts';
import { CheckBox } from '../CheckBox';
import { useCart } from '../../hooks/useCart';

interface ItemOfCartProps {
  stripePriceId: string;
  productImg: string;
  productName: string;
  price: string;
  discount: number;
  oldPrice: string;
  amountProducts: number;
}

export function ItemOfCart({
  stripePriceId,
  productImg,
  productName,
  price,
  discount,
  oldPrice,
  amountProducts
}: ItemOfCartProps) {

  const [isSelected, setIsSelected] = useState(false);
  const { toggleSelectedProduct, products } = useCart();
  
  const toggleIsSelected = () => toggleSelectedProduct(stripePriceId);

  useEffect(() => {
    products.forEach((product) => {
      if (stripePriceId === product.stripePriceId) {
        setIsSelected(product.isSelected);
      }
    });

  }, [products, stripePriceId]);

  return (
    <Styled.Container>
      <Styled.ProductContainer>
        <Styled.CheckboxAndImg>
          <CheckBox isActive={isSelected} setIsActive={toggleIsSelected} />

          <Styled.ImgContainer>
            <Styled.ProductImg
              style={{ 'backgroundImage': `url(${productImg})` }}
              aria-label={`Imagem de ${productName}`}
            />
          </Styled.ImgContainer>
        </Styled.CheckboxAndImg>

        <Styled.ProductName>{productName}</Styled.ProductName>
      </Styled.ProductContainer>

      <Styled.PriceContainer>
        
        <Styled.OldPrice>{oldPrice}</Styled.OldPrice>
        
        <Styled.PriceAndDiscount>
          {discount > 0 && (
            <Styled.Discount>{discount}%</Styled.Discount>
          )}

          <Styled.Price>{price}</Styled.Price>
        </Styled.PriceAndDiscount>

        <Styled.AmountProductsContainer>
          <AmountProducts
            amountProducts={amountProducts}
            stripePriceId={stripePriceId}
          />
        </Styled.AmountProductsContainer>

      </Styled.PriceContainer>
    </Styled.Container>
  );
}
