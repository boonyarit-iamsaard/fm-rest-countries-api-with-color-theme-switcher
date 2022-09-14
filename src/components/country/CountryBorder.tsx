import { FC } from 'react';

import Link from 'next/link';

import { useCountryCode } from '@/context';

interface CountryBorderProps {
  borders: string[];
}

const CountryBorder: FC<CountryBorderProps> = ({ borders }) => {
  const { codes } = useCountryCode();
  const borderCountries = borders.map(border =>
    codes.find(code => code.code === border)
  );

  if (!borderCountries.length)
    return (
      <div className="space-y-4">
        <p>
          <strong>Border Countries: </strong>
        </p>
        <span>N/A</span>
      </div>
    );

  return (
    <div className="space-y-4">
      <p>
        <strong>Border Countries: </strong>
      </p>
      <div className="flex flex-wrap gap-4">
        {borderCountries.map(
          country =>
            country && (
              <Link href={'/countries/' + country.code} key={country.code}>
                <a className="inline-block border px-4 py-2 text-sm">
                  {country.name}
                </a>
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default CountryBorder;
