import { FC, useEffect, useState } from 'react';

import { Country } from '@/lib/types';
import CountryListItem from './CountryListItem';

interface CountryListProps {
  countryList: Country[];
}

const CountryList: FC<CountryListProps> = ({ countryList }) => {
  const pageStart = 0;
  const pageSize = 25;
  const [pageEnd, setPageEnd] = useState(pageSize);
  const hasNextPage = pageEnd < countryList.length;

  const handleLoadMore = () => {
    if (countryList.length - pageEnd < pageSize) {
      setPageEnd(countryList.length);
    } else {
      setPageEnd(pageEnd + pageSize);
    }
  };

  useEffect(() => {
    setPageEnd(pageSize);
  }, [countryList]);

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {countryList.slice(pageStart, pageEnd).map((country, index) => (
        <CountryListItem
          key={country.cca3}
          country={country}
          priority={index < 4}
        />
      ))}
      {hasNextPage && (
        <button
          className="w-full rounded-lg px-4 py-2 text-center hover:bg-blue-500 hover:text-white"
          onClick={handleLoadMore}
        >
          Load More...
        </button>
      )}
    </div>
  );
};

export default CountryList;
