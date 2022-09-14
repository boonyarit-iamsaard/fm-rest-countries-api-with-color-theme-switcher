import { FC } from 'react';

import { Country } from '@/lib/types';
import Link from 'next/link';

import CountryFlag from './CountryFlag';

interface CountryListItemProps {
  country: Country;
  priority?: boolean;
}

const CountryListItem: FC<CountryListItemProps> = ({
  country,
  priority = false,
}) => {
  const {
    name: { common },
    population,
    capital,
    region,
    flags: { svg },
    cca3,
  } = country;

  return (
    <Link href={'/countries/' + cca3}>
      <div className="cursor-pointer rounded-lg border">
        <CountryFlag
          src={svg}
          alt={common}
          priority={priority}
          rounded={true}
        />
        <div className="p-4">
          <p className="font-bold">{common}</p>
          <p>
            <strong>Population: </strong>
            {population.toLocaleString('en-US')}
          </p>
          <p>
            <strong>Region: </strong>
            {region}
          </p>
          <p>
            <strong>Capital: </strong>
            {capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryListItem;
