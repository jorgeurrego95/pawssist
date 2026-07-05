import { createContext, ReactNode, useContext, useState } from 'react';

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

const VaultContext = createContext<VaultContextValue | undefined>(undefined);

export function VaultProvider({ children }: { children: ReactNode }) {
  const [uploads, setUploads] = useState<VaultUpload[]>([]);

  function addUpload(upload: Omit<VaultUpload, 'id' | 'createdAt'>) {
    const newUpload: VaultUpload = {
      ...upload,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };

    setUploads((currentUploads) => [newUpload, ...currentUploads]);
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