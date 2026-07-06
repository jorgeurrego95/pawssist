import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../src/theme/colors';
import { VaultProvider } from '../../src/context/VaultContext';
import { PetProvider } from '../../src/context/PetContext';

export default function TabsLayout() {
  return (
    <PetProvider>
      <VaultProvider>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: '#7A8A82',
            tabBarStyle: {
              backgroundColor: '#FFFFFF',
              borderTopColor: '#E6EEE9',
              height: 92,
              paddingTop: 10,
              paddingBottom: 24,
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: '700',
            },
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              tabBarIcon: ({ color, focused }) => (
                <Ionicons
                  name={focused ? 'home' : 'home-outline'}
                  color={color}
                  size={24}
                />
              ),
            }}
          />

          <Tabs.Screen
            name="pets"
            options={{
              title: 'Pets',
              tabBarIcon: ({ color, focused }) => (
                <Ionicons
                  name={focused ? 'paw' : 'paw-outline'}
                  color={color}
                  size={24}
                />
              ),
            }}
          />

          <Tabs.Screen
            name="scan"
            options={{
              title: 'Scan',
              tabBarIcon: ({ color, focused }) => (
                <Ionicons
                  name={focused ? 'scan' : 'scan-outline'}
                  color={color}
                  size={26}
                />
              ),
            }}
          />

          <Tabs.Screen
            name="vault"
            options={{
              title: 'Vault',
              tabBarIcon: ({ color, focused }) => (
                <Ionicons
                  name={focused ? 'folder-open' : 'folder-open-outline'}
                  color={color}
                  size={24}
                />
              ),
            }}
          />

          <Tabs.Screen
            name="assistant"
            options={{
              title: 'Assistant',
              tabBarIcon: ({ color, focused }) => (
                <Ionicons
                  name={
                    focused
                      ? 'chatbubble-ellipses'
                      : 'chatbubble-ellipses-outline'
                  }
                  color={color}
                  size={24}
                />
              ),
            }}
          />

          <Tabs.Screen
            name="settings"
            options={{
              title: 'Settings',
              tabBarIcon: ({ color, focused }) => (
                <Ionicons
                  name={focused ? 'settings' : 'settings-outline'}
                  color={color}
                  size={24}
                />
              ),
            }}
          />

          <Tabs.Screen
            name="upload-detail"
            options={{
              href: null,
            }}
          />
        </Tabs>
      </VaultProvider>
    </PetProvider>
  );
}