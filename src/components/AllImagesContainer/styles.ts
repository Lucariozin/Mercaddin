import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 750px) {
    gap: 1.5rem;
  }
`;
