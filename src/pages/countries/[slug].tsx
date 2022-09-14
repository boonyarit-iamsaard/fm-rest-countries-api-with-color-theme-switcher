import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { ParsedUrlQuery } from 'querystring';

import { CountryInfo } from '@/components/country';
import { countriesRepository } from '@/lib/api/countries';
import { CountryExtended } from '@/lib/types';
import { useEffect, useState } from 'react';

interface Params extends ParsedUrlQuery {
  slug: string;
}

interface CountryPageProps {
  country: CountryExtended | null;
  slug: string;
}

const CountryPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  country,
  slug,
}) => {
  const [clientFetchedCountry, setClientFetchedCountry] =
    useState<CountryExtended | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!country) {
      setLoading(true);
      countriesRepository.findByCountryCode(slug).then(country => {
        if (country) {
          setClientFetchedCountry(country);
        } else {
          // TODO: improve error handling
          setError('Country not found');
        }
        setLoading(false);
      });
    }
  }, [country, slug]);

  // TODO: improve conditional rendering
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    // TODO: improve error handling
    return <div>Error: {error}</div>;
  }
  if (clientFetchedCountry) {
    return <CountryInfo country={clientFetchedCountry} />;
  }
  if (country) {
    return <CountryInfo country={country} />;
  }
  return <div>Country not found</div>;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const countries = await countriesRepository.findAll();
  const paths = countries.map(country => ({
    params: { slug: country.cca3 },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<CountryPageProps, Params> = async ({
  params,
}) => {
  if (!params || !params.slug) {
    return { notFound: true };
  }

  const country = await countriesRepository.findByCountryCode(params.slug);

  return {
    props: {
      country,
      slug: params.slug,
    },
  };
};

export default CountryPage;
