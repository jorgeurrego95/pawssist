import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Pet } from '../types/pet';

type PetContextValue = {
  pets: Pet[];
  activePet: Pet;
  setActivePet: (id: string) => void;
  addPet: (pet: Pet) => void;
};

const ACTIVE_PET_STORAGE_KEY = 'pawssist-active-pet-id';

const defaultPets: Pet[] = [
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

const PetContext = createContext<PetContextValue | undefined>(undefined);

export function PetProvider({ children }: { children: ReactNode }) {
  const [pets, setPets] = useState(defaultPets);
  const [activePetId, setActivePetId] = useState('bella');

  useEffect(() => {
    async function loadActivePet() {
      const savedPetId = await AsyncStorage.getItem(ACTIVE_PET_STORAGE_KEY);

      if (savedPetId && pets.some((pet) => pet.id === savedPetId)) {
        setActivePetId(savedPetId);
      }
    }

    loadActivePet();
  }, [pets]);

  const activePet = pets.find((pet) => pet.id === activePetId) ?? pets[0];

  async function setActivePet(id: string) {
    setActivePetId(id);
    await AsyncStorage.setItem(ACTIVE_PET_STORAGE_KEY, id);
  }

  function addPet(pet: Pet) {
    setPets((currentPets) => [...currentPets, pet]);
    setActivePetId(pet.id);
  }

  return (
    <PetContext.Provider
      value={{
        pets,
        activePet,
        setActivePet,
        addPet,
      }}
    >
      {children}
    </PetContext.Provider>
  );
}

export function usePet() {
  const context = useContext(PetContext);

  if (!context) {
    throw new Error('usePet must be used inside PetProvider');
  }

  return context;
}