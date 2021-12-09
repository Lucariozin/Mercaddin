import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  display: flex;
`;

export const NumberOfProductsOnCart = styled.span`
  display: flex;
  height: 2rem;
  padding: 0 0.7rem 0 0.7rem;
  border-radius: 0.8rem;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 600;
  background-color: var(--orange-300);
  color: var(--gray-50);

  position: relative;
  left: -0.8rem;
  top: -0.3rem;

  @media (max-width: 600px) {
    height: 1.5rem;
    font-size: 1.2rem;
    padding-top: 0.3rem;
  }
`;
