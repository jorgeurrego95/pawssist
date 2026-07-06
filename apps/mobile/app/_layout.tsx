import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { PetProvider } from '../src/context/PetContext';

export default function RootLayout() {
  return (
    <PetProvider>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }} />
    </PetProvider>
  );
}