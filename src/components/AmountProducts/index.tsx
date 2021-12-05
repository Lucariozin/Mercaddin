import * as Styled from './styles';

import { Dispatch, SetStateAction, useEffect } from 'react';
import { useCart } from '../../hooks/useCart';

interface AmountProductsProps {
  amountProducts: number;
  setAmountProducts?: Dispatch<SetStateAction<number>>;
  stripePriceId?: string;
}

export function AmountProducts({
  amountProducts,
  setAmountProducts,
  stripePriceId
}: AmountProductsProps) {

  const { incrementProductAmount, decrementProductAmount, setProductAmount } = useCart();

  function incrementNumberOfProducts() {
    if (setAmountProducts) {
      setAmountProducts((state) => {
        if (state < 10) return state + 1;
  
        return state;
      });
    }

    if (stripePriceId) incrementProductAmount(stripePriceId);
  }

  function decrementNumberOfProducts() {
    if (setAmountProducts) {
      setAmountProducts((state) => {
        if (state - 1 < 1) return state;
    
        return state - 1;
      });
    }
    
    if (stripePriceId) decrementProductAmount(stripePriceId);
  }

  useEffect(() => {
    if (!stripePriceId) return;

    setProductAmount(stripePriceId, amountProducts);
  }, [setProductAmount, amountProducts, stripePriceId]);

  return (
    <Styled.Container>
      <Styled.Minus
        type="button"
        onClick={decrementNumberOfProducts}
      >
        -
      </Styled.Minus>
      {amountProducts}
      <Styled.Plus
        type="button"
        onClick={incrementNumberOfProducts}
      >
        +
      </Styled.Plus>
    </Styled.Container>
  );
}
