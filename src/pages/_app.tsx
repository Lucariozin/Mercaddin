import { AppProps } from 'next/app';

import { Provider as NextAuthProvider } from 'next-auth/client';
import { CartProvider } from '../hooks/useCart';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyles } from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <ToastContainer />

      <CartProvider>
        
        <GlobalStyles />

        <Component {...pageProps} />

      </CartProvider>
    </NextAuthProvider>
  );
}

export default MyApp
