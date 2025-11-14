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
            rel='icon'
            href='../components/header/logo_impost.png'
            type='image/png'
            sizes='png'
          />
          <title>ImpostinhA</title>
        </Head>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default MyApp;
