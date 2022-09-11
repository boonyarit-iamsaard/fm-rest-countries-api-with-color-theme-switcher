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
      </Head>

      <h1 className="text-center text-2xl font-bold">
        Frontend Mentor | REST Countries API with color theme switcher
      </h1>
    </Fragment>
  );
};

export default Home;
