import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../src/theme/colors';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: '#7A8A82',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#E6EEE9',
          height: 86,
          paddingTop: 8,
          paddingBottom: 22
        },
        tabBarLabelStyle: { fontSize: 12, fontWeight: '600' }
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} /> }} />
      <Tabs.Screen name="pets" options={{ title: 'Pets', tabBarIcon: ({ color, size }) => <Ionicons name="paw" color={color} size={size} /> }} />
      <Tabs.Screen name="scan" options={{ title: 'Scan', tabBarIcon: ({ color, size }) => <Ionicons name="scan" color={color} size={size} /> }} />
      <Tabs.Screen name="vault" options={{ title: 'Vault', tabBarIcon: ({ color, size }) => <Ionicons name="folder-open" color={color} size={size} /> }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings', tabBarIcon: ({ color, size }) => <Ionicons name="settings" color={color} size={size} /> }} />
    </Tabs>
  );
}
