import { FC, useEffect, useState } from 'react';

import Image from 'next/image';

import { Country } from '@/lib/types';

interface CountryListItemProps {
  country: Country;
  index: number;
}

const CountryListItem: FC<CountryListItemProps> = ({ country, index }) => {
  const {
    name: { common, nativeName },
    population,
    capital,
    region,
    flags: { svg },
  } = country;

  // TODO: move to dynamic country page
  const [hasNativeName, setHasNativeName] = useState(false);

  // TODO: move to dynamic country page
  useEffect(() => {
    if (Object.keys(nativeName).length > 0) {
      setHasNativeName(true);
    }
  }, [nativeName]);

  return (
    <div className="rounded-lg border">
      <div className="aspect-w-3 aspect-h-2 relative w-full overflow-hidden">
        <Image
          src={svg}
          alt={common}
          layout="fill"
          objectFit="cover"
          priority={index < 4 ? true : false}
        />
      </div>
      <div className="p-4">
        <p className="font-bold">{common}</p>
        <p className="text-sm">
          <strong>Native Name: </strong>
          {hasNativeName ? Object.values(nativeName)[0].common : 'N/A'}
        </p>
        <p>
          <strong>Population: </strong>
          {population}
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
  );
};

export default CountryListItem;
