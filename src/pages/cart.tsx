import * as Styled from '../styles/CartPageStyles';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';

import { useCart } from '../hooks/useCart';

import { Header } from '../components/Header';
import { ItemOfCart } from '../components/ItemOfCart';
import { CheckBox } from '../components/CheckBox';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { getStripeJs } from '../services/stripe-js';

export default function CartPage() {
  const {
    products,
    selectedProducts,
    numberOfSelectedProductsInCart,
    totalPrice,
    numberOfProductsInCart,
    selectAllProducts,
    unselectAllProducts
  } = useCart();

  const [selectAllProductsState, setSelectAllProductsState] = useState(false);

  function toggleSelectAllProducts() {
    setSelectAllProductsState((state) => !state);

    if (!selectAllProductsState) {
      selectAllProducts();
    } else {
      unselectAllProducts();
    }
  }

  async function handleGoToPayment() {
    if (numberOfSelectedProductsInCart === 0) {
      toast('Selecione os Produtos que Deseja Comprar', {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        style: {
          width: '40rem',
          right: '10rem',
          textAlign: 'center',
          fontSize: '2rem',
          fontWeight: 600,
          color: '#ED8936',
          backgroundColor: '#F7FAFC',
        },
      });

      return;
    }

    const response = await api.post('/payment', { selectedProducts });

    const { sessionId } = response.data;

    const stripeJs = await getStripeJs();

    await stripeJs.redirectToCheckout({ sessionId });
  }

  useEffect(() => {
    let thereAreUnselectedProducts = false;

    products.forEach((product) => {
      if (!product.isSelected) thereAreUnselectedProducts = true;
    });

    if (thereAreUnselectedProducts) {
      setSelectAllProductsState(false);
    } else {
      setSelectAllProductsState(true);
    }

  }, [products]);

  return (
    <>
      <Head>
        <title>Carrinho De Compras</title>
      </Head>

      <Header />

      <Styled.Container>
        <Styled.Wrapper>
          
          <Styled.Header>
            <Styled.CartText>Carrinho de Compras</Styled.CartText>

            <Styled.ProductsNumberContainer>
              <Styled.ProductsNumber>{numberOfProductsInCart}</Styled.ProductsNumber>
              {products.length > 1 ? 'Produtos' : 'Produto'}
            </Styled.ProductsNumberContainer>

            <Styled.InfoContainer>
              <Styled.InfoItem>Preço</Styled.InfoItem>
              <Styled.InfoItem>Quantidade</Styled.InfoItem>
            </Styled.InfoContainer>
          </Styled.Header>

          <Styled.ItemsContainer>

            {products.length > 0 ? (
              products.map((product) => (
                <ItemOfCart
                  key={product.stripePriceId}
                  stripePriceId={product.stripePriceId}
                  productName={product.name}
                  discount={product.discount}
                  amountProducts={product.amountProducts}
                  price={product.price}
                  oldPrice={product.oldPrice}
                  productImg={product.imgArray[0]}
                />
              ))
            ) : (
              <Styled.NoProductsMessage>
                Adicione novos Produtos para vê-los no Carrinho
              </Styled.NoProductsMessage>
            )}

          </Styled.ItemsContainer>
          
          {numberOfProductsInCart > 0 && (
            <Styled.GoToPaymentContainer>
              <Styled.SelectAllContainer>
                <CheckBox isActive={selectAllProductsState} setIsActive={toggleSelectAllProducts} />

                <Styled.SelectAll>Selecionar Tudo ({numberOfProductsInCart})</Styled.SelectAll>
              </Styled.SelectAllContainer>
              
              <Styled.TotalPriceContainer>
                Total ({selectedProducts.length} itens):

                <Styled.TotalPrice>{totalPrice}</Styled.TotalPrice>
              </Styled.TotalPriceContainer>

              <Styled.GoToPaymentButton type="button" onClick={handleGoToPayment}>
                Continuar
              </Styled.GoToPaymentButton>

            </Styled.GoToPaymentContainer>
          )}
          
        </Styled.Wrapper>
      </Styled.Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  } else {
    return {
      props: {},
    };
  }
};
