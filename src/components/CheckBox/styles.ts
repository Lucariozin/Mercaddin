import styled from "styled-components";

export const Container = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 0.3rem;
  background-color: var(--gray-300);
  border: 0.1rem solid var(--gray-400);
  cursor: pointer;
`;

export const ContainerActive = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 0.3rem;
  background-color: var(--orange-400);
  border: 0.1rem solid var(--orange-400);
  filter: brightness(1.1);
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;
