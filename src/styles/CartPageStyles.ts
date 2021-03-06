import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-top: 10rem;
`;

export const Wrapper = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 0 1rem 0 1rem;
`;

export const Header = styled.header`
  background-color: var(--gray-50);
  height: 5rem;
  display: flex;
  align-items: center;
  border-radius: 0.3rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
`;

export const CartText = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--orange-400);
  margin-left: 8rem;
  white-space: nowrap;

  &::after {
    content: '';
    display: block;
    width: 0.2rem;
    height: 2rem;
    margin: 0 2rem;
    background-color: var(--gray-300);

    position: relative;
    bottom: -0.1rem;

    @media (max-width: 630px) {
      margin: 0 1rem;
    }
  }

  @media (max-width: 940px) {
    margin-left: 2rem;
  }

  @media (max-width: 630px) {
    margin-left: 1rem;
    font-size: 1.4rem;
  }

  @media (max-width: 320px) {
    display: none;
  }
`;

export const ProductsNumberContainer = styled.div`
  font-size: 1.6rem;
  color: var(--gray-600);
  display: flex;
  align-items: center;

  @media (max-width: 320px) {
    margin-left: 2rem;
  }
`;

export const ProductsNumber = styled.span`
  font-weight: 700;
  font-size: 2rem;
  color: var(--orange-400);
  filter: brightness(1.1);
  margin-right: 1rem;
`;

export const InfoContainer = styled.div`
  height: 100%;
  display: flex;
  margin-left: auto;
  padding: 0 8rem 0 8rem;
  align-items: center;
  gap: 11.5rem;

  @media (max-width: 940px) {
    padding: 0 4rem 0 4rem;
    gap: 6rem;
  }

  @media (max-width: 570px) {
    display: none;
  }
`;

export const InfoItem = styled.span`
  font-size: 1.4rem;
  color: var(--gray-600);
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  gap: 0.8rem;
`;

export const NoProductsMessage = styled.h2`
  font-size: 3rem;
  color: var(--gray-400);
  margin: 5rem auto;
`;

export const GoToPaymentContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 3rem;
  width: 100%;
  height: 10rem;
  background-color: var(--gray-50);
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
  border-radius: 0.3rem;

  @media (max-width: 520px) {
    flex-direction: column;
    justify-content: center;
    height: 15rem;
    gap: 2rem;
  }
`;

export const SelectAllContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;

  @media (max-width: 520px) {
    margin: 0 1rem;
  }
`;

export const SelectAll = styled.span`
  font-size: 1.6rem;
  color: var(--gray-700);
  margin-left: 2rem;
  white-space: nowrap;
`;

export const TotalPriceAndPaymentButton = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
    margin-right: 2rem;
  }

  @media (max-width: 520px) {
    margin: 0 1rem;
  }
`;

export const TotalPriceContainer = styled.div`
  padding-left: 2rem;
  margin-right: 5rem;
  font-size: 1.6rem;
  color: var(--gray-700);
  white-space: nowrap;

  display: flex;
  align-items: center;

  @media (max-width: 770px) {
    margin-right: 0;
  }

  @media (max-width: 700px) {
    padding-left: 0;
  }
`;

export const TotalPrice = styled.span`
  margin-left: 1rem;
  font-size: 2.5rem;
  color: var(--orange-500);
  filter: brightness(1.1);
`;

export const GoToPaymentButton = styled.button`
  height: 4rem;
  max-width: 22rem;

  padding: 0 4rem;
  margin: 0 2rem;

  font-size: 1.6rem;
  font-weight: 600;
  color: var(--gray-50);
  background-color: var(--orange-400);
  border: none;
  border-radius: 1rem;
  cursor: pointer;

  transition: all .2s;

  &:hover {
    background-color: var(--orange-500);
    filter: brightness(1.1);
  }

  @media (max-width: 700px) {
    max-width: none;
    width: 100%;
  }
`;
