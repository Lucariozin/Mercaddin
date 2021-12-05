import * as Styled from './styles';

import Link from 'next/link';
import { signIn } from 'next-auth/client';

import { FaGoogle } from 'react-icons/fa';

interface LoginFormProps {
  successUrl: string;
}

export function LoginForm({ successUrl }: LoginFormProps) {
  function handleSignIn() {
    signIn(
      'google',
      { 
        redirect: true,
        callbackUrl: successUrl,
      }
    );
  }

  return (
    <Styled.Container>
      <Styled.LoginText>Entre</Styled.LoginText>

      <Styled.LoginWithGoogleButton type="button" onClick={handleSignIn}>
        <FaGoogle size="20" />

        <Styled.Spacing />

        Google
      </Styled.LoginWithGoogleButton>

      <Styled.Span>
        Novo no Mercaddin?

        <Link href="/register" passHref>
          <Styled.RegisterLink>Cadastrar</Styled.RegisterLink>
        </Link>
      </Styled.Span>
    </Styled.Container>
  );
}
