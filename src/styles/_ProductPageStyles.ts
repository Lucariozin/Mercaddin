import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.main`
  max-width: 1000px;
  width: 100%;
  margin: 0 1rem 0 1rem;
  margin-top: 22rem;
  display: flex;
  align-items: center;
  gap: 10rem;
`;

export const ImgContainer = styled.div``;

export const CurrentImgContainer = styled.div`
  width: 37rem;
  height: 37rem;
  border-radius: 1.5rem;
  margin-bottom: 2.5rem;
  background-color: var(--gray-300);
  cursor: pointer;

  overflow: hidden;
  background-size: cover;
  background-position: center;
`;

export const AllImgsContainer = styled.div`
  display: flex;
  gap: 2.5rem;
`;

export const DetailsContainer = styled.div``;

export const ProductName = styled.h2`
  font-size: 3rem;
  font-weight: 600;
`;

export const ProductDescription = styled.p`
  font-size: 1.4rem;
  line-height: 2.5rem;
  color: var(--gray-600);
`;

export const PriceContainer = styled.div``;

export const PriceWithDiscountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Price = styled.span`
  font-size: 2.2rem;
  font-weight: 600;
`;

export const Discount = styled.span`
  padding: 0.1rem 0.7rem 0.1rem 0.7rem;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--orange-500);
  background-color: var(--orange-100);
  border-radius: 0.5rem;
`;

export const OldPrice = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  text-decoration: line-through;
  color: var(--gray-400);
  margin-left: auto;
`;

export const AddToCartContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 3rem;
`;

export const AddToCartButton = styled.button`
  border: none;
  background-color: var(--orange-400);
  border-radius: 0.8rem;
  padding: 1rem 1.5rem 1rem 1.5rem;
  color: var(--gray-50);
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 1rem;

  transition: all .2s;

  &:hover {
    background-color: var(--orange-500);
    filter: brightness(1.1);
  }
`;
