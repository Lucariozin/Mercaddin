import * as Styled from '../styles/SearchPageStyles';

import { GetServerSideProps } from "next";
import { api } from "../services/api";

import { Header } from "../components/Header";
import { ProductsContainer } from "../components/ProductsContainer";

import { ProductType } from "../types/Product";

interface SearchPageProps {
  products: ProductType[]; 
}

export default function SearchPage({ products }: SearchPageProps) {
  return (
    <>
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
    },
  };
};
