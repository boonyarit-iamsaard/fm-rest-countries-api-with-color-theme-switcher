import { Fragment } from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>
          Frontend Mentor | REST Countries API with color theme switcher
        </title>
        <meta
          name="description"
          content="This is a solution to the REST Countries API with color theme switcher challenge on Frontend Mentor."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto p-4">
        <h1 className="text-center text-2xl font-bold">
          Frontend Mentor | REST Countries API with color theme switcher
        </h1>
      </main>
    </Fragment>
  );
};

export default Home;
