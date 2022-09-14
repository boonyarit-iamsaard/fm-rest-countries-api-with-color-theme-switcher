import { FC, Fragment } from 'react';

import { useRouter } from 'next/router';

import { CountryExtended } from '@/lib/types';
import Head from 'next/head';
import CountryBorder from './CountryBorder';
import CountryFlag from './CountryFlag';

interface CountryInfoProps {
  country: CountryExtended;
}

const CountryInfo: FC<CountryInfoProps> = ({ country }) => {
  const { back } = useRouter();
  const {
    capital,
    currencies,
    flags: { svg },
    languages,
    name: { common, nativeName },
    population,
    region,
    subregion,
    tld,
    borders,
  } = country;

  const isEmptyObject = (obj: Record<string, unknown>) =>
    Object.keys(obj).length === 0;
  const setCurrencies = (currencies: CountryExtended['currencies']) => {
    return !isEmptyObject(currencies)
      ? Object.values(currencies)
          .map(currency => currency.name)
          .join(', ')
      : 'N/A';
  };
  const setLanguages = (languages: CountryExtended['languages']) => {
    return !isEmptyObject(languages)
      ? Object.values(languages).join(', ')
      : 'N/A';
  };
  const setNativeName = (nativeName: CountryExtended['name']['nativeName']) => {
    return !isEmptyObject(nativeName)
      ? Object.values(nativeName)[0].common
      : 'N/A';
  };

  return (
    <Fragment>
      <Head>
        <title>{common}</title>
      </Head>
      {/* go back button */}
      <button className="block border px-4 py-2 text-sm" onClick={back}>
        <span>Back</span>
      </button>
      <div className="space-y-4">
        <CountryFlag src={svg} alt={common} priority />
        <div>
          <h1 className="text-xl font-bold">{common}</h1>
        </div>
        <div>
          <p>
            <strong>Native Name: </strong>
            {setNativeName(nativeName)}
          </p>
          <p>
            <strong>Pupolation: </strong>
            {population.toLocaleString('en-US')}
          </p>
          <p>
            <strong>Region: </strong>
            {region}
          </p>
          <p>
            <strong>Sub Region: </strong>
            {subregion ? subregion : 'N/A'}
          </p>
          <p>
            <strong>Capital: </strong>
            {capital.length ? capital[0] : 'N/A'}
          </p>
        </div>
        <div>
          <p>
            <strong>Top Level Domain: </strong>
            {tld.length ? tld[0] : 'N/A'}
          </p>
          <p>
            <strong>Currencies: </strong>
            {setCurrencies(currencies)}
          </p>
          <p>
            <strong>Languages: </strong>
            {setLanguages(languages)}
          </p>
        </div>
        <CountryBorder borders={borders} />
      </div>
    </Fragment>
  );
};

export default CountryInfo;
