import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Screen } from '../../src/components/Screen';
import { DisplayText, Body, Heading, Caption } from '../../src/components/Text';
import { Card } from '../../src/components/Card';
import { Button } from '../../src/components/Button';
import { colors } from '../../src/theme/colors';

export default function ScanScreen() {
  return (
    <Screen>
      <DisplayText>Smart Scan</DisplayText>
      <Body style={styles.subtitle}>Point your camera at a vet record. Pawssist will extract the details and organize them for you.</Body>

      <View style={styles.scanner}>
        <Ionicons name="scan-outline" size={72} color={colors.primary} />
        <Heading style={{ marginTop: 16 }}>Scan → Organized → Done</Heading>
        <Caption style={{ marginTop: 8, textAlign: 'center' }}>Vaccine certificates, prescriptions, lab results, invoices, and more.</Caption>
      </View>

      <Button label="Start scanning" variant="cta" />

      <View style={{ marginTop: 20 }}>
        <Card>
          <Heading>What happens next?</Heading>
          <Body style={styles.list}>1. Capture the document</Body>
          <Body style={styles.list}>2. Review extracted fields</Body>
          <Body style={styles.list}>3. Confirm and save to Care Vault</Body>
        </Card>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  subtitle: { marginTop: 8, color: colors.muted },
  scanner: {
    marginTop: 28,
    marginBottom: 24,
    borderRadius: 24,
    minHeight: 300,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: colors.mint,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 28
  },
  list: { marginTop: 10 }
});
