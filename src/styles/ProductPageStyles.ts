import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.main`
  max-width: 1000px;
  width: 100%;
  margin: 13rem 1rem 0 1rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 10rem;

  @media (max-width: 950px) {
    gap: 5rem;
  }

  @media (max-width: 820px) {
    flex-direction: column;
  }

  @media (max-width: 500px) {
    margin: 8rem 0 3rem 0;
    gap: 0;
  }
`;

export const ImgContainer = styled.div`
  @media (max-width: 500px) {
    width: 100%;
  }
`;

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

  @media (max-width: 500px) {
    width: 100%;
    height: 42rem;
    border-radius: 0;
  }

  @media (max-width: 420px) {
    height: 37rem;
  }

  @media (max-width: 370px) {
    height: 32rem;
  }

  @media (max-width: 320px) {
    height: 27rem;
  }
`;

export const AllImgsContainer = styled.div`
  display: flex;
  gap: 2.5rem;
`;

export const DetailsContainer = styled.div`
  max-width: 50rem;

  @media (max-width: 500px) {
    margin: 0 1rem;
  }
`;

export const ProductName = styled.h2`
  font-size: 3rem;
  font-weight: 600;

  @media (max-width: 500px) {
    font-size: 2.5rem;
  }
`;

export const ProductDescription = styled.p`
  font-size: 1.4rem;
  line-height: 2.5rem;
  color: var(--gray-600);
`;

export const PriceContainer = styled.div`
  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: 500px) {
    justify-content: space-between;
    margin-top: 3rem;
  }
`;

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

  @media (max-width: 800px) {
    margin-left: 2rem;
  }
`;

export const AddToCartContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 3rem;
  margin-right: 1rem;

  @media (max-width: 500px) {
    flex-direction: column;
    margin-right: 0;
  }
`;

export const AddToCartButton = styled.button`
  height: 4rem;
  border: none;
  background-color: var(--orange-400);
  border-radius: 0.8rem;
  padding: 1rem 1.5rem 1rem 1.5rem;
  color: var(--gray-50);
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;

  display: flex;
  align-items: center;
  gap: 1rem;

  transition: all .2s;

  &:hover {
    background-color: var(--orange-500);
    filter: brightness(1.1);
  }

  @media (max-width: 500px) {
    justify-content: center;
    padding: 2.5rem 1.5rem;
  }
`;

export const BackImgButton = styled.button`
  width: 5rem;
  height: 5rem;
  display: none;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--gray-50);
  border: none;
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.4);
  position: absolute;
  left: 1rem;
  top: 27rem;

  transition: filter .2s;

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 500px) {
    display: flex;
  }

  @media (max-width: 420px) {
    top: 25rem;
  }

  @media (max-width: 370px) {
    top: 22rem;
  }

  @media (max-width: 320px) {
    top: 20rem;
  }
`;

export const NextImgButton = styled.button`
  width: 5rem;
  height: 5rem;
  display: none;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--gray-50);
  border: none;
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.6);
  position: absolute;
  right: 1rem;
  top: 27rem;

  transition: filter .2s;

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 500px) {
    display: flex;
  }

  @media (max-width: 420px) {
    top: 25rem;
  }

  @media (max-width: 370px) {
    top: 22rem;
  }

  @media (max-width: 320px) {
    top: 20rem;
  }
`;
