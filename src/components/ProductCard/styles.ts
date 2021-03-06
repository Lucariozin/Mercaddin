import styled from "styled-components";

export const Container = styled.div`
  max-width: 25rem;
  width: 100%;
  height: 38rem;
  display: flex;
  flex-direction: column;
  background-color: var(--gray-50);
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.2);
  border: 0.2rem solid var(--gray-50);
  cursor: pointer;

  transition: border .3s;

  &:hover {
    border: 2px solid var(--orange-500);
  }

  @media (max-width: 985px) {
    height: 36rem;
  }

  @media (max-width: 855px) {
    height: 34rem;
  }

  @media (max-width: 850px) {
    width: 19rem;
    height: 30rem;
  }

  @media (max-width: 430px) {
    width: 100%;
    height: 30rem;
  }

  @media (max-width: 375px) {
    height: 26rem;
  }
`;

export const Content = styled.div`
  padding: 1rem;
  margin-top: auto;
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 25rem;

  background-color: var(--gray-100);
  border-radius: 0 0 2rem 2rem;
  border-bottom: 0.2rem solid var(--orange-300);

  overflow: hidden;
  background-size: cover;
  background-position: center;
`;

export const Name = styled.span`
  font-size: 1.8rem;
  font-weight: 600;

  @media (max-width: 950px) {
    font-size: 1.6rem;
  }

  @media (max-width: 820px) {
    font-size: 1.4rem;
  }

  @media (max-width: 375px) {
    font-size: 1.2rem;
  }
`;

export const Separation = styled.span`
  display: block;
  height: 0.2rem;
  width: 50%;
  margin: 1.5rem auto;

  background-color: var(--orange-500);

  @media (max-width: 375px) {
    margin: 1rem auto;
  }
`;

export const Price = styled.span`
  font-size: 1.6rem;
  font-weight: 600;

  @media (max-width: 950px) {
    font-size: 1.4rem;
  }

  @media (max-width: 375px) {
    font-size: 1.2rem;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Discount = styled.span`
  padding: 0.2rem 0.7rem 0.2rem 0.7rem;
  font-size: 1.2rem;

  font-weight: 700;
  color: var(--orange-500);
  background-color: var(--orange-100);
  border-radius: 0.5rem;
  margin: 0 1rem 0 1rem;

  @media (max-width: 950px) {
    font-size: 1rem;
  }
`;

export const OldPrice = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  text-decoration: line-through;
  color: var(--gray-400);
  margin-left: auto;

  @media (max-width: 980px) {
    font-size: 1.2rem;
  }

  @media (max-width: 885px) {
    display: none;
  }
`;
