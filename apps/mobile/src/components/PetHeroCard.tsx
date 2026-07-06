import { Image, StyleSheet, View } from 'react-native';
import { Card } from './Card';
import { Body, Caption, Heading, Metric } from './Text';
import { Pet } from '../types/pet';
import { colors } from '../theme/colors';

const petImages = {
  bella: require('../../assets/images/Bella Test.png'),
  zeus: require('../../assets/images/Zeus Test.png'),
};

export function PetHeroCard({ pet }: { pet: Pet }) {
  const petImage = petImages[pet.id as keyof typeof petImages] ?? petImages.bella;

  return (
    <Card>
      <View style={styles.hero}>
        <View style={styles.leftSide}>
          <Heading>{pet.name}</Heading>
          <Caption>{pet.breed} • {pet.age}</Caption>

          <View style={styles.badge}>
            <Body>💚 Healthy</Body>
          </View>

          <View style={styles.metricsRow}>
            <View>
              <Metric>{pet.weightKg} kg</Metric>
              <Caption>Current weight</Caption>
            </View>

            <View style={styles.divider} />

            <View>
              <Metric>18 days</Metric>
              <Caption>Until next care</Caption>
            </View>
          </View>

          <View style={styles.nextCare}>
            <Body>💉 Next: {pet.nextVaccine}</Body>
            <Caption>Due soon</Caption>
          </View>
        </View>

        <Image source={petImage} style={styles.petPhoto} resizeMode="cover" />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  hero: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftSide: {
    flex: 1,
    paddingRight: 10,
  },
  badge: {
    marginTop: 10,
    alignSelf: 'flex-start',
    backgroundColor: colors.mint,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  metricsRow: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  divider: {
    width: 1,
    height: 42,
    backgroundColor: colors.border,
  },
  nextCare: {
    marginTop: 16,
  },
  petPhoto: {
    width: 130,
    height: 120,
    borderRadius: 24,
    backgroundColor: colors.mint,
  },
});