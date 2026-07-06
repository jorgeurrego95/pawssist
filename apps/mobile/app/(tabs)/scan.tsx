import { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Screen } from '../../src/components/Screen';
import { DisplayText, Body, Heading, Caption } from '../../src/components/Text';
import { Card } from '../../src/components/Card';
import { Button } from '../../src/components/Button';
import { colors } from '../../src/theme/colors';
import { useVault } from '../../src/context/VaultContext';

export default function ScanScreen() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const { addUpload } = useVault();

  async function chooseDocument() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 0.8,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setSaved(false);
    }
  }

  function saveToVault() {
    if (!selectedImage) return;

    addUpload({
      name: 'Uploaded vet record.jpg',
      uri: selectedImage,
    });

    setSaved(true);
  }

  return (
    <Screen>
      <DisplayText>Smart Scan</DisplayText>

      <Body style={styles.subtitle}>
        Upload a vet record. Pawssist will organize it into your Care Vault.
      </Body>

      <View style={styles.scanner}>
        {selectedImage ? (
          <Image source={{ uri: selectedImage }} style={styles.previewImage} />
        ) : (
          <>
            <Ionicons name="scan-outline" size={72} color={colors.primary} />
            <Heading style={{ marginTop: 16 }}>Scan → Organized → Done</Heading>
            <Caption style={{ marginTop: 8, textAlign: 'center' }}>
              Vaccine certificates, prescriptions, lab results, invoices, and more.
            </Caption>
          </>
        )}
      </View>

      <Button
        label={selectedImage ? 'Choose another document' : 'Choose document'}
        variant="cta"
        onPress={chooseDocument}
      />

      {selectedImage && (
        <View style={{ marginTop: 14 }}>
          <Button
            label={saved ? 'Saved to Care Vault' : 'Save to Care Vault'}
            variant={saved ? 'quiet' : 'primary'}
            onPress={saveToVault}
          />
        </View>
      )}

      <View style={{ marginTop: 20 }}>
        <Card>
          <Heading>Care Vault Uploads</Heading>

          <Caption style={{ marginTop: 12 }}>
            {saved
              ? 'Document saved. Open the Vault tab to see it.'
              : selectedImage
                ? 'Document ready to save.'
                : 'No documents uploaded yet.'}
          </Caption>
        </Card>
      </View>

      <View style={{ marginTop: 20 }}>
        <Card>
          <Heading>What happens next?</Heading>
          <Body style={styles.list}>1. Capture or upload the document</Body>
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
    padding: 28,
    overflow: 'hidden',
  },
  previewImage: {
    width: '100%',
    height: 260,
    borderRadius: 18,
  },
  list: { marginTop: 10 },
});