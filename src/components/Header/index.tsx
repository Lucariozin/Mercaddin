import * as Styled from './styles';

import Link from 'next/link';
import { useState } from 'react';

import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/client';
import { useCart } from '../../hooks/useCart';

import { AiFillShopping } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { CartIcon } from '../CartIcon';

export function Header() {
  const [wantedProduct, setWantedProducts] = useState('');
  const [session] = useSession();
  const { numberOfProductsInCart } = useCart();
  const { asPath, push } = useRouter();


  const handleSignOut = () => signOut();

  function handleSearchProducts() {
    if (wantedProduct) push(`/search?keyword=${wantedProduct}`);
  }

  return (
    <Styled.Container>
      <Styled.Wrapper>
        
        <Styled.LogoAndSearchWrapper>
          <Styled.LogoContainer onClick={() => push('/')}>
            <AiFillShopping size="56" color="#F7FAFC" />
            <Styled.LogoText>
              Mercaddin
            </Styled.LogoText>
          </Styled.LogoContainer>

          <Styled.SearchContainer>
            <Styled.SearchInput
              type="text"
              placeholder="Faça sua busca"
              value={wantedProduct}
              onChange={(e) => setWantedProducts(e.target.value)}
            />
            
            <Styled.SearchButton type="button" onClick={handleSearchProducts}>
              <FiSearch size="16" color="#F7FAFC" />
            </Styled.SearchButton>
          </Styled.SearchContainer>
        </Styled.LogoAndSearchWrapper>

        <Styled.LoginContainer>
          {session ? (
            <>
              <Styled.CartContainer>
                <CartIcon numberOfProducts={numberOfProductsInCart} />
              </Styled.CartContainer>

              <Styled.WelcomeUserContainer>
                <Styled.UserContainer>
                  <Styled.UserImg src={session?.user.image} alt="Imagem do usuário" />

                  <Styled.WelcomeMessage>Olá, {session?.user.name.split(' ')[0]}!</Styled.WelcomeMessage>
                </Styled.UserContainer>

                <Styled.QuitButton type="button" onClick={handleSignOut}>
                  Sair
                </Styled.QuitButton>
              </Styled.WelcomeUserContainer>
            </>
          ) : (
            <>
              <Styled.CartContainer>
                <CartIcon numberOfProducts={numberOfProductsInCart} />
              </Styled.CartContainer>
              
              <Styled.LoginLinks>
                <Link href={`/register?back=${asPath}`} passHref >
                  <Styled.RegisterLink>Cadastrar</Styled.RegisterLink>
                </Link>

                <Styled.LinkSpacing></Styled.LinkSpacing>

                <Link href={`/login?back=${asPath}`} passHref >
                  <Styled.LoginLink>Entre</Styled.LoginLink>
                </Link>
              </Styled.LoginLinks>
            </>
          )}
        </Styled.LoginContainer>

      </Styled.Wrapper>
    </Styled.Container>
  );
}
