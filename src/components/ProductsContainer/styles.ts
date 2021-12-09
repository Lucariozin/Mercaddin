import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.main`
  max-width: 1080px;
  margin-top: 15rem;
  margin-bottom: 2rem;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;

  @media (max-width: 850px) {
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
    margin-top: 12rem;
  }

  @media (max-width: 400px) {
    margin-top: 10rem;
  }
`;
