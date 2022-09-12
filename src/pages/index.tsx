import { ChangeEvent, Fragment, useEffect, useState } from 'react';

import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';

import { CountriesRepository } from '@/lib/api/countries';
import type { Country } from '@/lib/types';
import { CountryList } from '../components/country';

interface HomeProps {
  countries: Country[];
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  countries,
}) => {
  const [countryList, setCountryList] = useState<Country[]>([]);
  const [regionOptions, setRegionOptions] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');

  const handleSearchTermChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const handleSelectedRegionChange = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedRegion(event.target.value);
  };

  useEffect(() => {
    if (countries) {
      const regionOptions = [
        'All',
        ...countries
          // get all regions
          .map(country => country.region)
          // remove duplicates
          .filter((region, index, self) => self.indexOf(region) === index),
      ];

      setRegionOptions(regionOptions);
      setCountryList(
        countries
          // sort by common name
          .sort((a, b) => a.name.common.localeCompare(b.name.common))
          // filter by search term
          .filter(country =>
            country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
          )
          // then filter by region
          .filter(country => {
            if (selectedRegion === 'All') {
              return true;
            } else {
              return country.region === selectedRegion;
            }
          })
      );
    }
  }, [countries, searchTerm, selectedRegion]);

  // TODO: remove this function before deploying
  countries.forEach(country => {
    if (Object.keys(country.name.nativeName).length === 0) {
      console.log('native name not found => ', country.name.common);
    }
    if (!country.capital.length) {
      console.log('capital not found => ', country.name.common);
    }
    if (country.population === 0) {
      console.log('population not found => ', country.name.common);
    }
  });

  return (
    <Fragment>
      <Head>
        <title>
          Frontend Mentor | REST Countries API with color theme switcher
        </title>
      </Head>

      <h1 className="sr-only">
        Frontend Mentor | REST Countries API with color theme switcher
      </h1>

      <section className="country-list space-y-4">
        <input
          aria-label="Search for a country..."
          type="text"
          name="search-field"
          id="search-field"
          placeholder="Search for a country..."
          className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm"
          onChange={handleSearchTermChange}
        />

        <select
          aria-label="Filter by Region"
          name="region"
          id="region"
          className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm"
          onChange={handleSelectedRegionChange}
        >
          {regionOptions.map(region => (
            <option key={region} value={region}>
              {region === 'All' ? 'Filter by Region' : region}
            </option>
          ))}
        </select>

        {countryList.length > 0 ? (
          <CountryList countryList={countryList} />
        ) : (
          <p>No countries found.</p>
        )}
      </section>
    </Fragment>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const countriesRepository = new CountriesRepository();
  const countries = await countriesRepository.findAll();

  // TODO: improve error handling
  if (!Array.isArray(countries) || countries.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      countries,
    },
  };
};
