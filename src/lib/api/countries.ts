import { BASE_API_URL, BASE_FIELDS, EXTENDED_FIELDS } from '@/lib/constants';
import {
  CountriesRepositoryInterface,
  Country,
  CountryExtended,
} from '@/lib/types';

// TODO: implement error handling
export class CountriesRepository implements CountriesRepositoryInterface {
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

  async findByCommonName(commonName: string): Promise<CountryExtended | null> {
    const response = await fetch(
      `${this.baseApiUrl}/name/${commonName}?fields=${this.extendedFields.join(
        ','
      )}`
    );
    const countries = (await response.json()) as CountryExtended[];
    return countries.length > 0 ? countries[0] : null;
  }
}
