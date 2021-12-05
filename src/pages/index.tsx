import { GetServerSideProps } from "next"
import { getSession } from "next-auth/client";
import { useEffect } from "react";

import { Header } from "../components/Header";
import { ProductsContainer } from "../components/ProductsContainer"

import { useCart } from "../hooks/useCart";

import { api } from "../services/api";

import { ProductOfCart, ProductType } from "../types/Product";

interface HomeProps {
  products: ProductType[];
  itemsOfCart: ProductOfCart[];
}

export default function Home({ products, itemsOfCart }: HomeProps) {
  const { setProducts } = useCart();

  useEffect(() => {
    if (itemsOfCart.length > 0) setProducts(itemsOfCart);

  }, [itemsOfCart, setProducts]);

  return (
    <> 
      <Header />
      <ProductsContainer products={products} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
  const response = await api.get('/products');
  const session = await getSession({ req });

  let itemsOfCart: ProductOfCart[] = [];

  if (query.clear === 'true' && session) {
    await api.post('/products/set-cart', {
      email: session.user.email, 
      products: [],
    });

    return {
      props: {
        products: response.data,
        itemsOfCart,
      },
    };
  }

  if (session) {
    const { data } = await api.post('/products/get-cart', { email: session.user.email });
      
    if (data.itemsOfCart.length > 0) itemsOfCart = data.itemsOfCart;
  }

  return {
    props: {
      products: response.data,
      itemsOfCart,
    },
  };
};
