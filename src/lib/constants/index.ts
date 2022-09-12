export const BASE_API_URL = 'https://restcountries.com/v3.1';
export const BASE_FIELDS = [
  'name',
  'capital',
  'region',
  'population',
  'flags',
  'cca3',
];
export const EXTENDED_FIELDS = [
  ...BASE_FIELDS,
  'tld',
  'subregion',
  'currencies',
  'languages',
  'borders',
];
