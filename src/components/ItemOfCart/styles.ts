import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: var(--gray-50);
  padding: 1.5rem 2rem;
  border-bottom: 0.2rem solid var(--gray-300);
  border-radius: 0.3rem;
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 55rem;
  width: 100%;
`;

export const ImgContainer = styled.div`
  width: 8rem;
  height: 8rem;
  margin-left: 2rem;
  margin-right: 1rem;
`;

export const ProductImg = styled.div`
  width: 8rem;
  height: 8rem;

  overflow: hidden;
  background-size: cover;
  background-position: center;
`;

export const ProductName = styled.span`
  align-self: flex-start;
  font-size: 1.8rem;
  max-width: 35rem;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 3rem;
`;

export const Price = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  margin-left: 2rem;
  margin-right: 2rem;
`;

export const Discount = styled.span`
  padding: 0.1rem 0.7rem 0.1rem 0.7rem;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--orange-500);
  background-color: var(--orange-100);
  border-radius: 0.5rem;
  margin-left: 2rem;
`;

export const OldPrice = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  text-decoration: line-through;
  color: var(--gray-400);
`;

export const AmountProductsContainer = styled.div`
  margin-left: 5rem;
`;
