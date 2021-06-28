import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import { colors } from '../../assets/colors';

const Stack = createStackNavigator();

const ProfileStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: colors.white,
        headerTitleStyle: { fontWeight: '700' },
        headerTitleAlign: 'center',
        gestureEnabled: true,
      }}
    >
      <Stack.Screen
        component={ProfileScreen}
        name="ProfileScreen"
        options={{ title: 'Profile' }}
      />
      <Stack.Screen
        component={SettingsScreen}
        name="SettingsScreen"
        options={{ title: 'Settings' }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStackScreen;
