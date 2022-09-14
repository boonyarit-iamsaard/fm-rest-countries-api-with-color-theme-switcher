import { createContext, FC, ReactNode, useContext, useState } from 'react';

import { Country, CountryCode, CountryCodeContextType } from '@/lib/types';

interface CountryCodeProviderProps {
  children: ReactNode;
}

const countryCodeContextDefaultValues: CountryCodeContextType = {
  codes: [],
  // TODO: implement types
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  populateCodes: () => {},
};

const CountryCodeContext = createContext<CountryCodeContextType>(
  countryCodeContextDefaultValues
);

const CountryCodeProvider: FC<CountryCodeProviderProps> = ({ children }) => {
  const [codes, setCodes] = useState<CountryCode[]>([]);

  const populateCodes = (countries: Country[]) => {
    const codes: CountryCode[] = countries.map(country => ({
      code: country.cca3,
      name: country.name.common,
    }));

    setCodes(codes);
  };

  const values = {
    codes,
    populateCodes,
  };

  return (
    <CountryCodeContext.Provider value={values}>
      {children}
    </CountryCodeContext.Provider>
  );
};

export const useCountryCode = () => {
  return useContext(CountryCodeContext);
};

export default CountryCodeProvider;
