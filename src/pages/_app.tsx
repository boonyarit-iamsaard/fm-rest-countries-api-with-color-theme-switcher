import { Fragment } from 'react';

import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Layout } from '@/components/layout';
import { CountryCodeProvider } from '@/context';

import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider attribute="class">
        <Layout>
          <CountryCodeProvider>
            <Component {...pageProps} />
          </CountryCodeProvider>
        </Layout>
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
