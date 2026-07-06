import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Screen } from '../../src/components/Screen';
import { Body, Caption, DisplayText, Heading } from '../../src/components/Text';
import { PetHeroCard } from '../../src/components/PetHeroCard';
import { careInsights, recentRecords } from '../../src/data/mock';
import { Card } from '../../src/components/Card';
import { colors } from '../../src/theme/colors';
import { usePet } from '../../src/context/PetContext';

export default function HomeScreen() {
  const { activePet } = usePet();

  return (
    <Screen>
      <Caption>Pawssist Alpha</Caption>
      <DisplayText style={styles.title}>Good Morning, Jorge</DisplayText>
      <Body style={styles.subtitle}>
        {activePet.name} is healthy and ready for the next adventure.
      </Body>

      <View style={styles.section}>
        <PetHeroCard pet={activePet} />
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
          <Caption style={styles.glanceCaption}>{activePet.nextVaccine}</Caption>
        </View>

        <View style={styles.glanceCard}>
          <Body style={styles.glanceIcon}>📄</Body>
          <Caption style={styles.glanceLabel}>Records</Caption>
          <Heading style={styles.glanceMetric}>12</Heading>
          <Caption style={styles.glanceCaption}>In your vault</Caption>
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <Heading>{activePet.name}'s Insights</Heading>
        <Caption>See all</Caption>
      </View>

      <Card>
        <View style={styles.insightRow}>
          <View style={styles.insightIconCircle}>
            <Ionicons name="checkmark-circle" size={28} color={colors.primary} />
          </View>

          <View style={styles.insightText}>
            <Heading>{activePet.name} is doing well today</Heading>
            <Caption style={styles.insightBody}>
              No medications due. Stay on track with {activePet.name}'s upcoming care reminders.
            </Caption>
          </View>

          <Ionicons name="chevron-forward" size={22} color={colors.muted} />
        </View>

        <View style={styles.insightDivider} />

        <View style={styles.insightRow}>
          <View style={styles.insightIconCircle}>
            <Ionicons name="sunny" size={28} color={colors.primary} />
          </View>

          <View style={styles.insightText}>
            <Heading>{careInsights[1].title}</Heading>
            <Caption style={styles.insightBody}>{careInsights[1].body}</Caption>
          </View>

          <Ionicons name="chevron-forward" size={22} color={colors.muted} />
        </View>
      </Card>

      <View style={styles.section}>
        <Heading>Quick Actions</Heading>

        <View style={styles.actionGrid}>
          <View style={styles.actionTile}>
            <Body style={styles.actionIcon}>💉</Body>
            <Body style={styles.actionLabel}>Add Vaccine</Body>
          </View>

          <View style={styles.actionTile}>
            <Body style={styles.actionIcon}>⚖️</Body>
            <Body style={styles.actionLabel}>Log Weight</Body>
          </View>

          <View style={styles.actionTile}>
            <Body style={styles.actionIcon}>🩺</Body>
            <Body style={styles.actionLabel}>Vet Visit</Body>
          </View>

          <View style={styles.actionTileCta}>
            <Body style={styles.actionIcon}>💬</Body>
            <Body style={styles.actionLabelCta}>Ask Pawssist</Body>
          </View>
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <Heading>{activePet.name}'s Recent Records</Heading>
        <Caption>Care Vault</Caption>
      </View>

      <Card>
        {recentRecords.map((record, index) => (
          <View
            key={record}
            style={[
              styles.recordRow,
              index !== recentRecords.length - 1 && styles.recordBorder,
            ]}
          >
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
  insightRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingVertical: 12,
  },
  insightIconCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: colors.mint,
    alignItems: 'center',
    justifyContent: 'center',
  },
  insightText: {
    flex: 1,
  },
  insightBody: {
    marginTop: 4,
    lineHeight: 22,
  },
  insightDivider: {
    height: 1,
    backgroundColor: colors.border,
    marginLeft: 72,
  },
  actionGrid: {
    marginTop: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  actionTile: {
    width: '48%',
    minHeight: 96,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
  },
  actionTileCta: {
    width: '48%',
    minHeight: 96,
    backgroundColor: colors.primary,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
  },
  actionIcon: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 8,
  },
  actionLabel: {
    textAlign: 'center',
  },
  actionLabelCta: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
  },
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