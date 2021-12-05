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
  padding: 0 1rem 0 1rem;
  margin: 0 auto;
  display: flex;
  gap: 15rem;
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
`;

export const Mercaddin = styled.h1`
  font-size: 5rem;
  font-weight: 600;
  color: var(--gray-50);
  margin: 0;
`;

export const Description = styled.span`
  width: 35rem;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 500;
  color: var(--gray-50);
  margin-top: 5rem;
`;
