import AppProvider from '../hooks';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyles } from '../styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppProvider>
        <GlobalStyles />
        <Head>
          <link
            rel='shortcut icon'
            href='/public/globe.svg'
            type='image/x-icon'
          />
          <title>Chatbot</title>
        </Head>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default MyApp;
