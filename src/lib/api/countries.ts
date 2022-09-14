import { BASE_API_URL, BASE_FIELDS, EXTENDED_FIELDS } from '@/lib/constants';
import {
  CountriesRepositoryInterface,
  Country,
  CountryExtended,
} from '@/lib/types';

declare global {
  // eslint-disable-next-line no-var
  var countriesRepository: CountriesRepositoryInterface | undefined;
}

// TODO: implement error handling
class CountriesRepository implements CountriesRepositoryInterface {
  private readonly baseApiUrl = BASE_API_URL;
  private readonly baseFields = BASE_FIELDS;
  private readonly extendedFields = EXTENDED_FIELDS;

  async findAll(): Promise<Country[]> {
    const response = await fetch(
      `${this.baseApiUrl}/all?fields=${this.baseFields.join(',')}`
    );
    const countries = (await response.json()) as Country[];
    return countries;
  }

  async findByCountryCode(code: string): Promise<CountryExtended | null> {
    try {
      const response = await fetch(
        `${
          this.baseApiUrl
        }/alpha?codes=${code}&fields=${this.extendedFields.join(',')}`
      );

      if (!response.ok) {
        console.error(
          `response not ok error => ${response.status}: ${response.statusText}`
        );
        return null;
      }

      const countries = (await response.json()) as CountryExtended[];
      return countries.length > 0 ? countries[0] : null;
    } catch (error) {
      console.error('catch error => ', error);
      return null;
    }
  }
}

export const countriesRepository =
  global.countriesRepository || new CountriesRepository();

if (process.env.NODE_ENV !== 'production') {
  global.countriesRepository = countriesRepository;
}
