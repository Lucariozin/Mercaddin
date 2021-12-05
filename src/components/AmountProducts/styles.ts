import styled from "styled-components";

export const Container = styled.div`
  width: 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem 0.5rem 1rem;
  font-size: 1.6rem;
  font-weight: 700;
  background-color: var(--gray-50);
  border: 0.2rem solid var(--orange-500);
  border-radius: 0.8rem;
`;

export const Minus = styled.button`
  font-size: 2rem;
  color: var(--orange-500);
  font-weight: 600;
  cursor: pointer;
  background-color: transparent;
  border: none;

  transition: all .2s;

  &:hover {
    color: var(--orange-400);
    filter: brightness(1.1);
  }
`;

export const Plus = styled.button`
  font-size: 2rem;
  color: var(--orange-500);
  font-weight: 600;
  cursor: pointer;
  background-color: transparent;
  border: none;

  transition: all .2s;

  &:hover {
    color: var(--orange-400);
    filter: brightness(1.1);
  }
`;
