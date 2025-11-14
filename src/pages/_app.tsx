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
          <link rel='manifest' href='/manifest.json' />
          <link rel='icon' href='./favicon.ico' sizes='216x216' />
          <title>ImpostinhA</title>
        </Head>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default MyApp;
