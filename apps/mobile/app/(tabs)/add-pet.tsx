import { StyleSheet, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { Screen } from '../../src/components/Screen';
import { DisplayText, Body } from '../../src/components/Text';
import { Button } from '../../src/components/Button';
import { colors } from '../../src/theme/colors';

export default function AddPetScreen() {
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
        />

        <TextInput
          placeholder="Breed"
          placeholderTextColor={colors.muted}
          style={styles.input}
        />

        <TextInput
          placeholder="Age (example: 2 years)"
          placeholderTextColor={colors.muted}
          style={styles.input}
        />
      </View>

      <View style={styles.actions}>
        <Button
          label="Save Pet"
          variant="cta"
          onPress={() => router.back()}
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
  actions: {
    marginTop: 24,
  },
});