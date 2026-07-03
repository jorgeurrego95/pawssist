import { Pet } from '../types/pet';

export const pets: Pet[] = [
  {
    id: 'bella',
    name: 'Bella',
    species: 'dog',
    breed: 'Labrador Retriever',
    age: '4 years',
    weightKg: 24.3,
    nextVaccine: 'Rabies booster in 18 days',
    food: 'Royal Canin • 2 meals/day',
    conditions: ['Sensitive stomach']
  }
];

export const careInsights = [
  {
    title: 'Bella is doing well today',
    body: 'No medications due. Her next vaccine is in 18 days.'
  },
  {
    title: 'Warm afternoon expected',
    body: 'It may reach 29°C today. Bring extra water if you walk Bella after lunch.'
  }
];

export const recentRecords = [
  'Rabies certificate scanned',
  'Weight updated: 24.3 kg',
  'Vet visit summary saved'
];
