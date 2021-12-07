import * as Styled from '../../styles/_ProductPageStyles';

import Router, { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from "next";
import Head from 'next/head';
import { toast } from "react-toastify";

import { api } from "../../services/api";

import { useState } from "react";
import { useSession } from 'next-auth/client';
import { useCart } from "../../hooks/useCart";

import { HiOutlineShoppingCart } from 'react-icons/hi';
import { AllImagesContainer } from "../../components/AllImagesContainer";
import { DisplayOfImagesModal } from "../../components/DisplayOfImagesModal";
import { Header } from "../../components/Header";
import { AmountProducts } from "../../components/AmountProducts";
import { ProductType } from '../../types/Product';

interface ProductPageProps {
  stripePriceId: string;
  slug: string;
  name: string;
  description: string;
  price: string;
  discount: number;
  oldPrice: string;
  imgArray: string[];
}

export default function ProductPage({
  stripePriceId,
  name,
  description,
  price,
  discount,
  oldPrice,
  imgArray,
  slug
}: ProductPageProps) {

  const [currentImgSrc, setCurrentImgSrc] = useState(imgArray[0]);
  const [amountProducts, setAmountProducts] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [session] = useSession();
  const { addProductOnCart } = useCart();
  const { asPath } = useRouter();


  const closeModal = () => setModalIsOpen(false);
  const openModal = () => setModalIsOpen(true);

  function handleSetCurrentImgSrc(src: string) {
    if (src === currentImgSrc) return;

    setCurrentImgSrc(src);
  }

  function handleAddProductToCart() {
    if (!session) return Router.push(`/login?back=${asPath}`);

    const productHasBeenAdded = addProductOnCart({
      name,
      description,
      discount,
      oldPrice,
      imgArray,
      amountProducts,
      price,
      slug,
      stripePriceId,
      isSelected: true,
    });

    if (productHasBeenAdded) {
      toast('Seu Produto foi Adicionado ao Carrinho', {
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
    }
  }

  return (
    <>
      <Head>
        <title>{slug} | Mercaddin</title>
      </Head>

      <Header />

      <Styled.Container>
        <DisplayOfImagesModal
          isOpen={modalIsOpen}
          closeModal={closeModal}
          imgArray={imgArray}
          currentImgSrc={currentImgSrc}
          setCurrentImgSrc={setCurrentImgSrc}
        />

        <Styled.Wrapper>
          
          <Styled.ImgContainer>
            <Styled.CurrentImgContainer
              style={{ 'backgroundImage': `url(${currentImgSrc})` }}
              onClick={openModal}
              aria-label="Imagem do produto"
            >
              
            </Styled.CurrentImgContainer>

            <AllImagesContainer 
              imgArray={imgArray}
              currentImgSrc={currentImgSrc}
              handleSetCurrentImgSrc={handleSetCurrentImgSrc}
            />
            
          </Styled.ImgContainer>

          <Styled.DetailsContainer>
            <Styled.ProductName>{name}</Styled.ProductName>

            <Styled.ProductDescription>{description}</Styled.ProductDescription>

            <Styled.PriceContainer>
              <Styled.PriceWithDiscountContainer>
                <Styled.Price>{price}</Styled.Price>

                {discount > 0 && (
                  <Styled.Discount>{discount}%</Styled.Discount>
                )}

              </Styled.PriceWithDiscountContainer>
              
              {discount > 0 && (
                <Styled.OldPrice>{oldPrice}</Styled.OldPrice>
              )}

            </Styled.PriceContainer>

            <Styled.AddToCartContainer>

              <AmountProducts
                amountProducts={amountProducts}
                setAmountProducts={setAmountProducts}
              />

              <Styled.AddToCartButton type="button" onClick={handleAddProductToCart}>
                <HiOutlineShoppingCart size="20" color="#F7FAFC" />
                Adicionar ao carrinho
              </Styled.AddToCartButton>

            </Styled.AddToCartContainer>
          </Styled.DetailsContainer>

        </Styled.Wrapper>
      </Styled.Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const response = await api.get(`products/${slug}`);

  const { product }: { product: ProductType } = response.data;

  if (product.stripePriceId) {
    return {
      props: {
        stripePriceId: product.stripePriceId,
        slug: product.slug,
        name: product.name,
        description: product.description,
        price: product.price,
        discount: product.discount,
        oldPrice: product.oldPrice,
        imgArray: product.imgArray,
      },
      revalidate: 60 * 60 * 24, // 1 day
    };

  } else {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};
