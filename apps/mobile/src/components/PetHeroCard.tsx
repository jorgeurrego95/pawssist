import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card } from './Card';
import { Body, Caption, Heading, Metric } from './Text';
import { Pet } from '../types/pet';
import { colors } from '../theme/colors';

export function PetHeroCard({ pet }: { pet: Pet }) {
  return (
    <Card>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Ionicons name="paw" size={30} color="#FFFFFF" />
        </View>
        <View style={{ flex: 1 }}>
          <Heading>{pet.name}</Heading>
          <Caption>{pet.breed} • {pet.age}</Caption>
        </View>
      </View>

      <View style={styles.metrics}>
        <View>
          <Metric>{pet.weightKg} kg</Metric>
          <Caption>Current weight</Caption>
        </View>
        <View style={styles.divider} />
        <View style={{ flex: 1 }}>
          <Body>{pet.nextVaccine}</Body>
          <Caption>Next care event</Caption>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', gap: 14, alignItems: 'center' },
  avatar: { width: 58, height: 58, borderRadius: 29, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  metrics: { marginTop: 18, backgroundColor: colors.surface, borderRadius: 14, padding: 14, flexDirection: 'row', gap: 14, alignItems: 'center' },
  divider: { width: 1, height: 44, backgroundColor: colors.border }
});
