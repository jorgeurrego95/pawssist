import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Screen } from '../../src/components/Screen';
import { DisplayText, Body, Heading, Caption } from '../../src/components/Text';
import { Card } from '../../src/components/Card';
import { colors } from '../../src/theme/colors';
import { usePet } from '../../src/context/PetContext';

export default function PetsScreen() {
  const { pets, activePet, setActivePet } = usePet();

  return (
    <Screen>
      <DisplayText>Pets</DisplayText>

      <Body style={styles.subtitle}>
        Manage every pet in your household and choose who Pawssist should focus on.
      </Body>

      <View style={styles.petList}>
        {pets.map((pet) => {
          const isActive = pet.id === activePet.id;

          return (
            <Pressable
              key={pet.id}
              style={[styles.petCard, isActive && styles.activePetCard]}
              onPress={() => setActivePet(pet.id)}
            >
              <View style={styles.petIcon}>
                <Ionicons
                  name="paw"
                  size={24}
                  color={isActive ? '#FFFFFF' : colors.primary}
                />
              </View>

              <View style={styles.petCopy}>
                <Heading>{pet.name}</Heading>
                <Caption style={{ marginTop: 4 }}>
                  {pet.breed} • {pet.age}
                </Caption>
              </View>

              {isActive && (
                <View style={styles.activeBadge}>
                  <Caption style={styles.activeBadgeText}>Active</Caption>
                </View>
              )}
            </Pressable>
          );
        })}
      </View>

      <View style={styles.summarySection}>
        <Card>
          <Heading>{activePet.name}'s Summary</Heading>

          <Caption style={{ marginTop: 12 }}>Breed</Caption>
          <Body>{activePet.breed}</Body>

          <Caption style={{ marginTop: 12 }}>Age</Caption>
          <Body>{activePet.age}</Body>

          <Caption style={{ marginTop: 12 }}>Care Focus</Caption>
          <Body>Records, reminders, and uploads will use this pet next.</Body>
        </Card>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    marginTop: 8,
    color: colors.muted,
  },
  petList: {
    marginTop: 24,
    gap: 14,
  },
  petCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  activePetCard: {
    borderColor: colors.primary,
    backgroundColor: colors.lightMint,
  },
  petIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.lightMint,
    alignItems: 'center',
    justifyContent: 'center',
  },
  petCopy: {
    flex: 1,
  },
  activeBadge: {
    backgroundColor: colors.primary,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  activeBadgeText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  summarySection: {
    marginTop: 20,
  },
});