import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 10rem;
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;

  background-color: var(--orange-400);
  box-shadow: 0 0 4rem 0.1rem rgba(0, 0, 0, 0.3);
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 0.5rem;
`;

export const LogoText = styled.h1`
  font-size: 2.7rem;
  font-weight: 500;
  color: var(--gray-50);

  position: relative;
  top: 5px;
`;

export const SearchContainer = styled.div`
  height: 3.5rem;
  max-width: 50rem;
  width: 100%;
  margin-left: 5rem;
  padding: 0.3rem;
  padding-left: 1.5rem;
  background-color: var(--gray-50);
  border-radius: 100rem;

  display: flex;
  gap: 1rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  font-size: 1.6rem;
  outline: none;
  border: none;
  background-color: var(--gray-50);
  color: var(--gray-700);
  border-radius: 100rem;
`;

export const SearchButton = styled.button`
  width: 7rem;
  border: none;
  background-color: var(--orange-400);
  border-radius: 100rem;
  padding: 0 1rem 0 1rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all .2s;

  &:hover {
    background-color: var(--orange-500);
    filter: brightness(1.1);
  }
`;

export const CartContainer = styled.div`
  margin: 0 0 0 auto;
  padding-left: 2rem;
  width: 5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const LoginContainer = styled.div`
  display: flex;
  margin: 0 2rem 0 3rem;
`;

export const RegisterLink = styled.a`
  text-decoration: none;
  font-size: 1.6rem;
  color: var(--gray-50);
  font-weight: 500;
  display: flex;

  transition: all .2s;

  &::after {
    content: "";
    display: block;
    width: 0.2rem;
    height: 2.5rem;
    background-color: white;
    margin: 0 1rem 0 1rem;
  }

  &:hover {
    color: var(--orange-300);
    filter: brightness(1.1);
  }
`;

export const LoginLink = styled.a`
  text-decoration: none;
  font-size: 1.6rem;
  color: var(--gray-50);
  font-weight: 500;

  transition: all .2s;

  &:hover {
    color: var(--orange-300);
    filter: brightness(1.1);
  }
`;

export const WelcomeUserContainer = styled.div`
  display: flex;
  margin-left: 2rem;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const WelcomeMessage = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--gray-50);
`;

export const UserImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  flex-shrink: 0;
`;

export const QuitButton = styled.button`
  height: 3rem;
  font-size: 1.4rem;
  font-weight: 600;
  border: 0.2rem solid var(--orange-300);
  border-radius: 1rem;
  padding: 0 1rem 0 1rem;
  margin-top: auto;
  margin-left: 3rem;
  background-color: transparent;
  color: var(--gray-50);
  cursor: pointer;

  transition: all .2s;

  &:hover {
    background-color: var(--orange-500);
    filter: brightness(1.1);
  }
`;
