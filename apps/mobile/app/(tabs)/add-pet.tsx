import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { Screen } from '../../src/components/Screen';
import { DisplayText, Body } from '../../src/components/Text';
import { Button } from '../../src/components/Button';
import { colors } from '../../src/theme/colors';
import { usePet } from '../../src/context/PetContext';

export default function AddPetScreen() {
  const { pets, addPet } = usePet();

  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');

  function handleSavePet() {
    const cleanName = name.trim();
    const cleanBreed = breed.trim();
    const cleanAge = age.trim();
    const petId = cleanName.toLowerCase().replaceAll(' ', '-');

    if (!cleanName) {
      setError('Pet name is required.');
      return;
    }

    const petAlreadyExists = pets.some((pet) => pet.id === petId);

    if (petAlreadyExists) {
      setError('A pet with this name already exists.');
      return;
    }

    addPet({
      id: petId,
      name: cleanName,
      species: 'dog',
      breed: cleanBreed || 'Not added yet',
      age: cleanAge || 'Not added yet',
      weightKg: 0,
      nextVaccine: 'No upcoming vaccines added',
      food: 'No food plan added',
      conditions: ['None reported'],
    });

    router.back();
  }

  return (
    <Screen>
      <DisplayText>Add Pet</DisplayText>

      <Body style={styles.subtitle}>
        Add a new pet to your Pawssist household.
      </Body>

      <View style={styles.form}>
        <TextInput
          placeholder="Pet Name"
          placeholderTextColor={colors.muted}
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        <TextInput
          placeholder="Breed"
          placeholderTextColor={colors.muted}
          style={styles.input}
          value={breed}
          onChangeText={setBreed}
        />

        <TextInput
          placeholder="Age (example: 2 years)"
          placeholderTextColor={colors.muted}
          style={styles.input}
          value={age}
          onChangeText={setAge}
        />

        {error ? <Body style={styles.error}>{error}</Body> : null}
      </View>

      <View style={styles.actions}>
        <Button
          label="Save Pet"
          variant="cta"
          onPress={handleSavePet}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    marginTop: 8,
    color: colors.muted,
  },
  form: {
    marginTop: 24,
    gap: 14,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
  },
  error: {
    color: '#DC2626',
  },
  actions: {
    marginTop: 24,
  },
});