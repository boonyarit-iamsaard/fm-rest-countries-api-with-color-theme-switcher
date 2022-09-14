export type Country = {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  region: string;
  capital: string[];
  population: number;
  flags: {
    png: string;
    svg: string;
  };
  cca3: string;
};

export type CountryExtended = Country & {
  tld: string[];
  subregion: string;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  borders: string[];
};

export type CountryCode = {
  code: string;
  name: string;
};

export type CountryCodeContextType = {
  codes: CountryCode[];
  populateCodes: (countries: Country[]) => void;
};

export interface CountriesRepositoryInterface {
  findAll(): Promise<Country[]>;
  findByCountryCode(code: string): Promise<CountryExtended | null>;
}
