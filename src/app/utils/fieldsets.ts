import { Continents } from '../utils/continents';

interface FieldSet {
  name: string;
  value: any[];
}

export const FIELDSETS: FieldSet[] = [
  {
    name: 'Continent',
    value: Continents,
  },
  {
    name: 'Country',
    value: [],
  },
  {
    name: 'State',
    value: [],
  },
  {
    name: 'City',
    value: [],
  },
];
