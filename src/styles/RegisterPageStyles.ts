import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--orange-400);
`;

export const Wrapper = styled.main`
  max-width: 1100px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  gap: 15rem;

  @media (max-width: 1200px) {
    gap: 2rem;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1150px) {
    svg {
      width: 15rem;
      height: 15rem;
    }
  }
`;

export const Mercaddin = styled.h1`
  font-size: 5rem;
  font-weight: 600;
  color: var(--gray-50);
  margin: 0;

  @media (max-width: 1150px) {
    font-size: 3rem;
  }

  @media (max-width: 350px) {
    font-size: 2rem;
  }
`;

export const Description = styled.span`
  width: 35rem;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 500;
  color: var(--gray-50);
  margin-top: 5rem;

  @media (max-width: 1150px) {
    font-size: 2rem;
    margin-top: 3rem;
  }

  @media (max-width: 350px) {
    font-size: 1.4rem;
    width: 25rem;
    margin-top: 2rem;
  }
`;
