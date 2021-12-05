import * as Styled from './styles';

import Link from 'next/link';
import { signIn } from 'next-auth/client';

import { FaGoogle } from 'react-icons/fa';

interface RegisterFormProps {
  successUrl: string;
}

export function RegisterForm({ successUrl }: RegisterFormProps) {
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
      <Styled.RegisterText>Cadastrar-se com</Styled.RegisterText>

      <Styled.RegisterWithGoogleButton type="button" onClick={handleSignIn}>
        <FaGoogle size="20" />

        <Styled.Spacing />

        Google
      </Styled.RegisterWithGoogleButton>

      <Styled.Span>
        Tem uma Conta?

        <Link href="/login" passHref>
          <Styled.LoginLink>Entre</Styled.LoginLink>
        </Link>
      </Styled.Span>
    </Styled.Container>
  );
}
