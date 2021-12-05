import Router from 'next/router';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import * as Styled from './styles';

interface CartIconProps {
  numberOfProducts: number;
}

export function CartIcon({ numberOfProducts }: CartIconProps) {
  return (
    <Styled.Container onClick={() => Router.push('/cart')}>
      <HiOutlineShoppingCart size="36" color="#F7FAFC" />

      {numberOfProducts > 0 && (
        <Styled.NumberOfProductsOnCart>{numberOfProducts}</Styled.NumberOfProductsOnCart>
      )}
      
    </Styled.Container>
  );
}
