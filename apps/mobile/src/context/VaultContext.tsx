import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type VaultUpload = {
  id: string;
  name: string;
  uri: string;
  createdAt: string;
};

type VaultContextValue = {
  uploads: VaultUpload[];
  addUpload: (upload: Omit<VaultUpload, 'id' | 'createdAt'>) => void;
};

const STORAGE_KEY = 'pawssist_uploads';

const VaultContext = createContext<VaultContextValue | undefined>(undefined);

export function VaultProvider({ children }: { children: ReactNode }) {
  const [uploads, setUploads] = useState<VaultUpload[]>([]);

  useEffect(() => {
    loadUploads();
  }, []);

  useEffect(() => {
    saveUploads();
  }, [uploads]);

  async function loadUploads() {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);

      if (stored) {
        setUploads(JSON.parse(stored));
      }
    } catch (error) {
      console.log('Failed to load uploads', error);
    }
  }

  async function saveUploads() {
    try {
      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(uploads)
      );
    } catch (error) {
      console.log('Failed to save uploads', error);
    }
  }

  function addUpload(upload: Omit<VaultUpload, 'id' | 'createdAt'>) {
    const newUpload: VaultUpload = {
      ...upload,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };

    setUploads((currentUploads) => [
      newUpload,
      ...currentUploads,
    ]);
  }

  return (
    <VaultContext.Provider value={{ uploads, addUpload }}>
      {children}
    </VaultContext.Provider>
  );
}

export function useVault() {
  const context = useContext(VaultContext);

  if (!context) {
    throw new Error('useVault must be used inside VaultProvider');
  }

  return context;
}