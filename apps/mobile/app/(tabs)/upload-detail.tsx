import { Image, StyleSheet, View } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Screen } from '../../src/components/Screen';
import { DisplayText, Body, Heading, Caption } from '../../src/components/Text';
import { Card } from '../../src/components/Card';
import { Button } from '../../src/components/Button';
import { colors } from '../../src/theme/colors';
import { useVault } from '../../src/context/VaultContext';

function formatUploadDate(date: string) {
  return new Date(date).toLocaleDateString('en-CA', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function UploadDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { uploads, deleteUpload } = useVault();

  const upload = uploads.find((item) => item.id === id);

  function handleDelete() {
    if (!id) return;

    deleteUpload(id);
    router.push('/vault');
  }

  if (!upload) {
    return (
      <Screen>
        <DisplayText>Upload Not Found</DisplayText>

        <Body style={styles.subtitle}>
          This document may have been removed or is no longer available.
        </Body>

        <View style={{ marginTop: 20 }}>
          <Button
            label="Back to Vault"
            variant="cta"
            onPress={() => router.push('/vault')}
          />
        </View>
      </Screen>
    );
  }

  return (
    <Screen>
      <View style={styles.headerRow}>
        <Ionicons
          name="chevron-back"
          size={28}
          color={colors.primary}
          onPress={() => router.back()}
        />

        <Caption>Care Vault Document</Caption>
      </View>

      <DisplayText style={{ marginTop: 16 }}>{upload.name}</DisplayText>

      <Caption style={styles.subtitle}>
        Uploaded {formatUploadDate(upload.createdAt)}
      </Caption>

      <Image source={{ uri: upload.uri }} style={styles.previewImage} />

      <View style={{ marginTop: 24 }}>
        <Card>
          <Heading>Extracted Details</Heading>

          <View style={styles.detailRow}>
            <Caption>Pet Name</Caption>
            <Body>Not assigned yet</Body>
          </View>

          <View style={styles.detailRow}>
            <Caption>Document Type</Caption>
            <Body>Vet Record</Body>
          </View>

          <View style={styles.detailRow}>
            <Caption>Status</Caption>
            <Body>Ready for AI extraction</Body>
          </View>
        </Card>
      </View>

      <View style={{ marginTop: 16 }}>
        <Button
          label="Delete Upload"
          variant="quiet"
          onPress={handleDelete}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  subtitle: {
    marginTop: 8,
    color: colors.muted,
  },
  previewImage: {
    marginTop: 24,
    width: '100%',
    height: 360,
    borderRadius: 24,
    backgroundColor: colors.lightMint,
  },
  detailRow: {
    marginTop: 16,
    gap: 4,
  },
});