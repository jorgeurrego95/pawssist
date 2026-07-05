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
      <DisplayText style={styles.title}>Good Morning, Jorge</DisplayText>
      <Body style={styles.subtitle}>Bella is healthy and ready for her next adventure.</Body>

      <View style={styles.section}>
        <PetHeroCard pet={pet} />
      </View>

      <View style={styles.sectionHeader}>
        <Heading>Today At A Glance</Heading>
        <Caption>Updated 3 hours ago</Caption>
      </View>

      <View style={styles.glanceRow}>
        <View style={styles.glanceCard}>
          <Body style={styles.glanceIcon}>🛡️</Body>
          <Caption style={styles.glanceLabel}>Care Score</Caption>
          <Heading style={styles.glanceMetric}>92/100</Heading>
          <Caption style={styles.glanceCaption}>Excellent</Caption>
        </View>

        <View style={styles.glanceCard}>
          <Body style={styles.glanceIcon}>📅</Body>
          <Caption style={styles.glanceLabel}>Next Event</Caption>
          <Heading style={styles.glanceMetric}>18 days</Heading>
          <Caption style={styles.glanceCaption}>Rabies Booster</Caption>
        </View>

        <View style={styles.glanceCard}>
          <Body style={styles.glanceIcon}>📄</Body>
          <Caption style={styles.glanceLabel}>Records</Caption>
          <Heading style={styles.glanceMetric}>12</Heading>
          <Caption style={styles.glanceCaption}>In your vault</Caption>
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <Heading>Today's Insights</Heading>
        <Caption>See all</Caption>
      </View>

      <View style={styles.stack}>
        <InsightCard title={careInsights[0].title} body={careInsights[0].body} icon="checkmark-circle" />
        <InsightCard title={careInsights[1].title} body={careInsights[1].body} icon="sunny" />
      </View>

      <View style={styles.section}>
        <Heading>Quick Actions</Heading>

        <View style={{ marginTop: 12, gap: 12 }}>
          <Button label="Add Record" />
          <Button label="Upload Document" />
          <Button label="Log Weight" />
          <Button label="Ask Pawssist" variant="cta" />
        </View>
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
  sectionHeader: {
    marginTop: 28,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  glanceRow: {
    flexDirection: 'row',
    gap: 10,
  },
  glanceCard: {
    flex: 1,
    minHeight: 140,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
    paddingVertical: 16,
  },
  glanceIcon: {
    textAlign: 'center',
    fontSize: 24,
  },
  glanceLabel: {
    marginTop: 10,
    textAlign: 'center',
  },
  glanceMetric: {
    marginTop: 4,
    textAlign: 'center',
  },
  glanceCaption: {
    textAlign: 'center',
  },
  stack: { gap: 12 },
  recordRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    paddingVertical: 12,
  },
  recordBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.accent,
  },
});