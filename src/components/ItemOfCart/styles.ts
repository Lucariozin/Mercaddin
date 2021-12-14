import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: var(--gray-50);
  padding: 1.5rem 2rem;
  border-bottom: 0.2rem solid var(--gray-300);
  border-radius: 0.3rem;

  @media (max-width: 1000px) {
    padding: 1.5rem 1rem;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50rem;

  @media (max-width: 520px) {
    width: 100%;
  }
`;

export const CheckboxAndImg = styled.div`
  display: flex;
  align-items: center;
`;

export const ImgContainer = styled.div`
  width: 8rem;
  height: 8rem;
  margin-left: 2rem;
  margin-right: 1rem;

  @media (max-width: 1000px) {
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

  @media (max-width: 1000px) {
    width: 6rem;
    height: 6rem;
  }
`;

export const ProductName = styled.span`
  align-self: flex-start;
  font-size: 1.8rem;
  max-width: 35rem;

  @media (max-width: 1000px) {
    font-size: 1.6rem;
  }

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 3rem;
  
  @media (max-width: 940px) {
    margin-right: 0;
  }

  @media (max-width: 570px) {
    flex-direction: column;
  }

  @media (max-width: 400px) {
    flex-direction: row;
    margin: 0;
  }
`;

export const PriceAndDiscount = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 940px) {
    flex-direction: column-reverse;
  }
`;

export const Price = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  margin-left: 2rem;
  margin-right: 2rem;
  white-space: nowrap;

  @media (max-width: 940px) {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
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

  @media (max-width: 940px) {
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

  @media (max-width: 940px) {
    display: none;
  }
`;

export const AmountProductsContainer = styled.div`
  margin-left: 5rem;

  @media (max-width: 940px) {
    margin-left: 0;
  }

  @media (max-width: 570px) {
    max-width: 11rem;
    width: 100%;
    margin: 1rem 4rem 0 2rem;
  }

  @media (max-width: 400px) {
    max-width: none;
    margin: 1rem 2rem 0 0;
  }
`;
