import * as Styled from '../styles/SearchPageStyles';

import Head from 'next/head';
import { GetServerSideProps } from "next";
import { api } from "../services/api";

import { Header } from "../components/Header";
import { ProductsContainer } from "../components/ProductsContainer";

import { ProductType } from "../types/Product";

interface SearchPageProps {
  products: ProductType[];
  keyword: string;
}

export default function SearchPage({ products, keyword }: SearchPageProps) {
  return (
    <>
      <Head>
        <title>{keyword} em Promoção no Mercaddin</title>
      </Head>

      <Header />

      {products.length > 0 ? (
        <ProductsContainer products={products} />
      ) : (
        <Styled.NoProductsMessage>
          Nenhum Produto Encontrado
        </Styled.NoProductsMessage>
      )}
      
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { keyword } = query;

  const response = await api.get(`/products/search/${keyword}`);

  return {
    props: {
      products: response.data,
      keyword: String(keyword),
    },
  };
};
