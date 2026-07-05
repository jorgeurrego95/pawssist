import { View } from 'react-native';
import { Screen } from '../../src/components/Screen';
import { DisplayText, Body, Heading, Caption } from '../../src/components/Text';
import { PetHeroCard } from '../../src/components/PetHeroCard';
import { Card } from '../../src/components/Card';
import { Button } from '../../src/components/Button';
import { pets } from '../../src/data/mock';

export default function PetsScreen() {
  const pet = pets[0];

  return (
    <Screen>
      <DisplayText>{pet.name}'s Profile</DisplayText>

      <Body style={{ marginTop: 8 }}>
        Everything Pawssist knows about {pet.name}, organized in one place.
      </Body>

      <View style={{ marginTop: 20 }}>
        <PetHeroCard pet={pet} />
      </View>

      <View style={{ marginTop: 16 }}>
        <Card>
          <Heading>Health Summary</Heading>

          <Caption style={{ marginTop: 12 }}>Breed</Caption>
          <Body>{pet.breed}</Body>

          <Caption style={{ marginTop: 12 }}>Age</Caption>
          <Body>{pet.age}</Body>

          <Caption style={{ marginTop: 12 }}>Current Weight</Caption>
          <Body>{pet.weightKg} kg</Body>
        </Card>
      </View>
      <View style={{ marginTop: 16 }}>
        <Card>
          <Heading>Care Alerts</Heading>

          <Caption style={{ marginTop: 12 }}>Upcoming Reminder</Caption>
          <Body>Rabies Booster</Body>

          <Caption style={{ marginTop: 12 }}>Due In</Caption>
          <Body>18 days</Body>

          <Caption style={{ marginTop: 12 }}>Priority</Caption>
          <Body>Medium</Body>
        </Card>
      </View>
      <View style={{ marginTop: 16 }}>
        <Card>
          <Heading>Care Details</Heading>

          <Caption style={{ marginTop: 12 }}>Food</Caption>
          <Body>{pet.food}</Body>

          <Caption style={{ marginTop: 12 }}>Known Conditions</Caption>
          <Body>{pet.conditions.join(', ')}</Body>

          <Caption style={{ marginTop: 12 }}>Allergies</Caption>
          <Body>None reported</Body>
        </Card>
      </View>

      <View style={{ marginTop: 16 }}>
        <Card>
          <Heading>Next Care Event</Heading>

          <Caption style={{ marginTop: 12 }}>Upcoming Vaccine</Caption>
          <Body>Rabies Booster</Body>

          <Caption style={{ marginTop: 12 }}>Due In</Caption>
          <Body>18 days</Body>

          <Caption style={{ marginTop: 12 }}>Recommended Action</Caption>
          <Body>Book a vet appointment soon.</Body>
        </Card>
      </View>

      <View style={{ marginTop: 16 }}>
        <Card>
          <Heading>Care Vault Records</Heading>

          <Caption style={{ marginTop: 12 }}>Vaccinations</Caption>
          <Body>Rabies Booster • Due in 18 days</Body>

          <Caption style={{ marginTop: 12 }}>Weight History</Caption>
          <Body>24.3 kg • Last updated today</Body>

          <Caption style={{ marginTop: 12 }}>Medications</Caption>
          <Body>No active medications</Body>

          <Caption style={{ marginTop: 12 }}>Vet Visits</Caption>
          <Body>Annual checkup • March 2026</Body>
        </Card>
      </View>
      <View style={{ marginTop: 16 }}>
       <Card>
          <Heading>Bella's Timeline</Heading>

          <Caption style={{ marginTop: 12 }}>July 2026</Caption>
          <Body>📅 Rabies booster scheduled</Body>

          <Caption style={{ marginTop: 12 }}>June 2026</Caption>
          <Body>⚖️ Weight updated to 24.3 kg</Body>

          <Caption style={{ marginTop: 12 }}>March 2026</Caption>
          <Body>🩺 Annual checkup completed</Body>

          <Caption style={{ marginTop: 12 }}>January 2026</Caption>
          <Body>💊 Sensitive stomach diagnosed</Body>
        </Card>
      </View>
      <View style={{ marginTop: 20 }}>
        <Button label="Edit Bella's Profile" />
      </View>
    </Screen>
  );
}