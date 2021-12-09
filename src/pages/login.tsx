import * as Styled from '../styles/LoginPageStyles';

import Head from 'next/head';
import { useRouter } from 'next/router';

import { AiFillShopping } from 'react-icons/ai';
import { LoginForm } from '../components/LoginForm';

export default function LoginPage() {
  const { query } = useRouter();

  return (
    <Styled.Container>
      <Head>
        <title>Faça Login e Comece Suas Compras | Mercaddin</title>
      </Head>

      <Styled.Wrapper>

        <Styled.LogoContainer>
          <Styled.LogoWrapper>
            <AiFillShopping size="280" color="#F7FAFC" />
            
            <Styled.Mercaddin>Mercaddin</Styled.Mercaddin>
          </Styled.LogoWrapper>

          <Styled.Description>
            Sua melhor plataforma de compras online
          </Styled.Description>
        </Styled.LogoContainer>

        <Styled.LoginContainer>
          <LoginForm successUrl={query.back ? `${process.env.NEXT_PUBLIC_APLICATION_URL}/${query.back}` : `${process.env.NEXT_PUBLIC_APLICATION_URL}`} />
        </Styled.LoginContainer>

      </Styled.Wrapper>
    </Styled.Container>
  );
}
