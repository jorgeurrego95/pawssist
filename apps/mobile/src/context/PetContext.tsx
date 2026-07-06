import { createContext, ReactNode, useContext, useState } from 'react';

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

  const activePet =
    pets.find((pet) => pet.id === activePetId) ?? pets[0];

  function setActivePet(id: string) {
    setActivePetId(id);
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