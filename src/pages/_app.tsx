import { Fragment } from 'react';

import type { AppProps } from 'next/app';

import '@/styles/globals.css';
import Head from 'next/head';

import { Layout } from '@/components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;
