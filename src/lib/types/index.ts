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

export interface CountriesRepositoryInterface {
  findAll(): Promise<Country[]>;
  findByCommonName(commonName: string): Promise<CountryExtended | null>;
}
