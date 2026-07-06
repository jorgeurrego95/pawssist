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
    conditions: ['Sensitive stomach'],
  },
  {
    id: 'zeus',
    name: 'Zeus',
    species: 'dog',
    breed: 'German Shepherd',
    age: '5 years',
    weightKg: 31.8,
    nextVaccine: 'Annual wellness exam in 30 days',
    food: 'Purina Pro Plan • 2 meals/day',
    conditions: ['None reported'],
  },
];

export const careInsights = [
  {
    title: 'Pet is doing well today',
    body: 'No medications due. Stay on track with upcoming care reminders.',
  },
  {
    title: 'Warm afternoon expected',
    body: 'Bring extra water if you plan a longer walk later today.',
  },
];

export const recentRecords = [
  'Vaccination record uploaded',
  'Weight updated',
  'Vet visit summary saved',
];