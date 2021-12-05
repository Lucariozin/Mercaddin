import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  background-color: var(--gray-50);
`;

export const RegisterText = styled.span`
  font-size: 2rem;
  font-weight: 600;
  color: var(--gray-700);
  margin-bottom: 5rem;
`;

export const Spacing = styled.span`
  width: 0.2rem;
  height: 2rem;
  background-color: var(--gray-50);
  margin: 0 1.5rem 0 1.5rem;
`;

export const RegisterWithGoogleButton = styled.button`
  height: 5rem;
  max-width: 20rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--red-500);
  color: var(--gray-50);
  padding: 0 2rem 0 2rem;
  margin: 0 auto;
  font-size: 1.6rem;
  font-weight: 600;
  
  border: none;
  border-radius: 100rem;
  cursor: pointer;

  transition: filter .2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Span = styled.span`
  font-size: 1.5rem;
  color: var(--gray-400);
  text-align: center;
  margin-top: 3rem;
`;

export const LoginLink = styled.a`
  text-decoration: none;
  font-weight: 700;
  margin-left: 0.5rem;
  color: var(--orange-400);

  transition: all .2s;

  &:hover {
    color: var(--orange-300);
    filter: brightness(1.1);
  }
`;
