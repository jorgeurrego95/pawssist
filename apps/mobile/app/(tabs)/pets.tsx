import { View } from 'react-native';
import { Screen } from '../../src/components/Screen';
import { DisplayText, Body, Heading, Caption } from '../../src/components/Text';
import { PetHeroCard } from '../../src/components/PetHeroCard';
import { Card } from '../../src/components/Card';
import { Button } from '../../src/components/Button';
import { pets } from '../../src/data/mock';

export default function PetsScreen() {
  return (
    <Screen>
      <DisplayText>My Pets</DisplayText>
      <Body style={{ marginTop: 8 }}>Everything Pawssist knows about your pet, organized in one place.</Body>

      <View style={{ marginTop: 20 }}>
        <PetHeroCard pet={pets[0]} />
      </View>

      <View style={{ marginTop: 16 }}>
        <Card>
          <Heading>Care Profile</Heading>
          <Caption style={{ marginTop: 8 }}>Food</Caption>
          <Body>{pets[0].food}</Body>
          <Caption style={{ marginTop: 14 }}>Known conditions</Caption>
          <Body>{pets[0].conditions.join(', ')}</Body>
        </Card>
      </View>

      <View style={{ marginTop: 20 }}>
        <Button label="Add another pet" />
      </View>
    </Screen>
  );
}
