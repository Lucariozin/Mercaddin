import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: var(--gray-50);
  padding: 1.5rem 2rem;
  border-bottom: 0.2rem solid var(--gray-300);
  border-radius: 0.3rem;

  @media (max-width: 980px) {
    padding: 1.5rem 1rem;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50rem;

  @media (max-width: 520px) {
    flex-direction: column;
  }
`;

export const CheckboxAndImg = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 520px) {
    margin-right: auto;
  }
`;

export const ImgContainer = styled.div`
  width: 8rem;
  height: 8rem;
  margin-left: 2rem;
  margin-right: 1rem;

  @media (max-width: 980px) {
    width: 6rem;
    height: 6rem;
    margin-left: 1rem;
  }
`;

export const ProductImg = styled.div`
  width: 8rem;
  height: 8rem;

  overflow: hidden;
  background-size: cover;
  background-position: center;

  @media (max-width: 980px) {
    width: 6rem;
    height: 6rem;
  }
`;

export const ProductName = styled.span`
  align-self: flex-start;
  font-size: 1.8rem;
  max-width: 35rem;

  @media (max-width: 980px) {
    font-size: 1.6rem;
  }

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }

  @media (max-width: 520px) {
    margin-top: 1rem;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 3rem;
  
  @media (max-width: 900px) {
    margin-right: 0;
  }

  @media (max-width: 370px) {
    flex-direction: column;
    margin-left: 1rem;
  }
`;

export const PriceAndDiscount = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 370px) {
    flex-direction: row-reverse;
  }
`;

export const Price = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  margin-left: 2rem;
  margin-right: 2rem;
  white-space: nowrap;

  @media (max-width: 900px) {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 370px) {
    margin-bottom: 0;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

export const Discount = styled.span`
  padding: 0.1rem 0.7rem 0.1rem 0.7rem;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--orange-500);
  background-color: var(--orange-100);
  border-radius: 0.5rem;
  margin-left: 2rem;

  @media (max-width: 900px) {
    font-size: 1.2rem;
    margin-left: 0;
  }
`;

export const OldPrice = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  text-decoration: line-through;
  color: var(--gray-400);
  white-space: nowrap;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const AmountProductsContainer = styled.div`
  margin-left: 5rem;

  @media (max-width: 900px) {
    margin-left: 0;
  }

  @media (max-width: 370px) {
    margin-top: 1rem;
  }
`;
