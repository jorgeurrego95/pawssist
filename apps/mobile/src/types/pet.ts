export type Pet = {
  id: string;
  name: string;
  species: 'dog' | 'cat' | 'other';
  breed: string;
  age: string;
  weightKg: number;
  nextVaccine: string;
  food: string;
  conditions: string[];
};
