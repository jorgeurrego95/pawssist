import { View } from 'react-native';
import { Screen } from '../../src/components/Screen';
import { DisplayText, Body, Heading, Caption } from '../../src/components/Text';
import { Card } from '../../src/components/Card';

const settings = [
  ['Privacy', 'Control data, consent, and exports'],
  ['Household', 'Invite family members and caregivers'],
  ['Notifications', 'Choose what Pawssist reminds you about'],
  ['Subscription', 'Manage Pawssist Premium']
];

export default function SettingsScreen() {
  return (
    <Screen>
      <DisplayText>Settings</DisplayText>
      <Body style={{ marginTop: 8 }}>Privacy-first controls for your pet care OS.</Body>

      <View style={{ marginTop: 24, gap: 12 }}>
        {settings.map(([title, detail]) => (
          <Card key={title}>
            <Heading>{title}</Heading>
            <Caption style={{ marginTop: 6 }}>{detail}</Caption>
          </Card>
        ))}
      </View>
    </Screen>
  );
}
