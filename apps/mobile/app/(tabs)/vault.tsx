import { View } from 'react-native';
import { Screen } from '../../src/components/Screen';
import { DisplayText, Body, Heading, Caption } from '../../src/components/Text';
import { Card } from '../../src/components/Card';

const items = [
  ['💉', 'Vaccines', '3 records'],
  ['💊', 'Medications', '1 active'],
  ['⚖️', 'Weight', '6 entries'],
  ['📄', 'Vet Records', '4 documents']
];

const recentUploads = [
  'Rabies Certificate.pdf',
  'Vet Invoice.jpg',
];

export default function VaultScreen() {
  return (
    <Screen>
      <DisplayText>Care Vault</DisplayText>

      <Body style={{ marginTop: 8 }}>
        Every important record, safely organized and ready when you need it.
      </Body>

      <View style={{ marginTop: 24, gap: 12 }}>
        {items.map(([emoji, title, detail]) => (
          <Card key={title}>
            <Heading>
              {emoji} {title}
            </Heading>
            <Caption style={{ marginTop: 6 }}>{detail}</Caption>
          </Card>
        ))}
      </View>

      <View style={{ marginTop: 24 }}>
        <Card>
          <Heading>Recent Uploads</Heading>

          {recentUploads.map((file) => (
            <Body key={file} style={{ marginTop: 12 }}>
              📄 {file}
            </Body>
          ))}
        </Card>
      </View>
    </Screen>
  );
}