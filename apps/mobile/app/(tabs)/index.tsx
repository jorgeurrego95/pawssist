import { StyleSheet, View } from 'react-native';
import { Screen } from '../../src/components/Screen';
import { Body, Caption, DisplayText, Heading } from '../../src/components/Text';
import { PetHeroCard } from '../../src/components/PetHeroCard';
import { InsightCard } from '../../src/components/InsightCard';
import { Button } from '../../src/components/Button';
import { pets, careInsights, recentRecords } from '../../src/data/mock';
import { Card } from '../../src/components/Card';
import { colors } from '../../src/theme/colors';

export default function HomeScreen() {
  const pet = pets[0];

  return (
    <Screen>
      <Caption>Pawssist Alpha</Caption>
      <DisplayText style={styles.title}>Good Morning, Jorge </DisplayText>
      <Body style={styles.subtitle}>Bella is healthy and ready for her next adventure.</Body>

      <View style={styles.section}>
        <PetHeroCard pet={pet} />
      </View>

      <View style={styles.section}>
  <Card>
    <Heading>Health Status</Heading>

    <Body style={{ marginTop: 12 }}>
      Excellent ✅
    </Body>

    <Caption style={{ marginTop: 8 }}>
      All vaccines and records are up to date.
    </Caption>
  </Card>
</View>
<View style={styles.section}>
  <Card>
    <Heading>Care Score</Heading>

    <DisplayText style={{ marginTop: 12 }}>
      92 / 100
    </DisplayText>

    <Caption style={{ marginTop: 8 }}>
      Excellent
    </Caption>
  </Card>
</View>

<View style={styles.section}>
  <Card>
    <Heading>Next Care Event</Heading>

    <DisplayText style={{ marginTop: 12 }}>
      💉 Rabies Booster
    </DisplayText>

    <Body style={{ marginTop: 8 }}>
      18 days remaining
    </Body>

    <Caption style={{ marginTop: 8 }}>
      No action required today.
    </Caption>
  </Card>
</View>

      <View style={styles.sectionHeader}>
        <Heading>Today's Care</Heading>
        <Caption>Updated 3 hours ago</Caption>
      </View>

      <View style={styles.stack}>
        <InsightCard title={careInsights[0].title} body={careInsights[0].body} icon="checkmark-circle" />
        <InsightCard title={careInsights[1].title} body={careInsights[1].body} icon="sunny" />
      </View>

      <View style={styles.section}>
        <Button label="Ask Pawssist" variant="cta" />
      </View>

      <View style={styles.sectionHeader}>
        <Heading>Recent Records</Heading>
        <Caption>Care Vault</Caption>
      </View>

      <Card>
        {recentRecords.map((record, index) => (
          <View key={record} style={[styles.recordRow, index !== recentRecords.length - 1 && styles.recordBorder]}>
            <View style={styles.dot} />
            <Body>{record}</Body>
          </View>
        ))}
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: { marginTop: 8 },
  subtitle: { marginTop: 8, color: colors.muted },
  section: { marginTop: 20 },
  sectionHeader: { marginTop: 28, marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' },
  stack: { gap: 12 },
  recordRow: { flexDirection: 'row', gap: 10, alignItems: 'center', paddingVertical: 12 },
  recordBorder: { borderBottomWidth: 1, borderBottomColor: colors.border },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: colors.accent }
});
