import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 500px) {
    display: none;
  }
`;
