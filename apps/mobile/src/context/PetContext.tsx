import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type Pet = {
  id: string;
  name: string;
  breed: string;
  age: string;
};

type PetContextValue = {
  pets: Pet[];
  activePet: Pet;
  setActivePet: (id: string) => void;
};

const ACTIVE_PET_STORAGE_KEY = 'pawssist-active-pet-id';

const defaultPets: Pet[] = [
  {
    id: 'bella',
    name: 'Bella',
    breed: 'Labrador Retriever',
    age: '4 years',
  },
  {
    id: 'zeus',
    name: 'Zeus',
    breed: 'German Shepherd',
    age: '5 years',
  },
];

const PetContext = createContext<PetContextValue | undefined>(undefined);

export function PetProvider({ children }: { children: ReactNode }) {
  const [pets] = useState(defaultPets);
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

  return (
    <PetContext.Provider
      value={{
        pets,
        activePet,
        setActivePet,
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