import { Image, Pressable, StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Screen } from '../../src/components/Screen';
import { DisplayText, Body, Heading, Caption } from '../../src/components/Text';
import { Card } from '../../src/components/Card';
import { colors } from '../../src/theme/colors';
import { useVault } from '../../src/context/VaultContext';

const items = [
  ['💉', 'Vaccines', '3 records'],
  ['💊', 'Medications', '1 active'],
  ['⚖️', 'Weight', '6 entries'],
  ['📄', 'Vet Records', '4 documents'],
];

function formatUploadDate(date: string) {
  return new Date(date).toLocaleDateString('en-CA', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function VaultScreen() {
  const { uploads } = useVault();

  return (
    <Screen>
      <DisplayText>Care Vault</DisplayText>

      <Body style={styles.subtitle}>
        Every important record, safely organized and ready when you need it.
      </Body>

      <View style={styles.categoryList}>
        {items.map(([emoji, title, detail]) => (
          <Card key={title}>
            <Heading>
              {emoji} {title}
            </Heading>
            <Caption style={{ marginTop: 6 }}>{detail}</Caption>
          </Card>
        ))}
      </View>

      <View style={styles.uploadSection}>
        <Card>
          <Heading>Recent Uploads</Heading>

          {uploads.length === 0 ? (
            <Caption style={{ marginTop: 12 }}>
              No uploaded documents yet.
            </Caption>
          ) : (
            <View style={styles.uploadList}>
              {uploads.map((upload) => (
                <Pressable
                  key={upload.id}
                  style={styles.uploadRow}
                  onPress={() =>
                    router.push({
                      pathname: '/upload-detail',
                      params: { id: upload.id },
                    })
                  }
                >
                  <Image source={{ uri: upload.uri }} style={styles.thumbnail} />

                  <View style={styles.uploadCopy}>
                    <Body style={styles.uploadName}>{upload.name}</Body>
                    <Caption style={styles.uploadDate}>
                      Uploaded {formatUploadDate(upload.createdAt)}
                    </Caption>
                  </View>

                  <Ionicons
                    name="chevron-forward"
                    size={22}
                    color={colors.muted}
                  />
                </Pressable>
              ))}
            </View>
          )}
        </Card>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    marginTop: 8,
  },
  categoryList: {
    marginTop: 24,
    gap: 12,
  },
  uploadSection: {
    marginTop: 24,
  },
  uploadList: {
    marginTop: 14,
    gap: 14,
  },
  uploadRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 6,
  },
  thumbnail: {
    width: 54,
    height: 54,
    borderRadius: 14,
    backgroundColor: colors.lightMint,
  },
  uploadCopy: {
    flex: 1,
  },
  uploadName: {
    fontWeight: '700',
  },
  uploadDate: {
    marginTop: 4,
  },
});