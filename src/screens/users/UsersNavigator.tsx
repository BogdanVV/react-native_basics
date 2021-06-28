import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UsersScreen from './screens/UsersScreen';
import UsersDetails from './screens/UsersDetails';
import { colors } from '../../assets/colors';

const UsersStack = createStackNavigator();

const UsersStackScreen = () => {
  return (
    <UsersStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: colors.white,
        headerTitleStyle: { fontWeight: '700' },
        headerTitleAlign: 'center',
        gestureEnabled: true,
        // headerRight: () => <Text>123</Text>,
      }}
      headerMode="float"
    >
      <UsersStack.Screen
        options={{ title: 'Users' }}
        component={UsersScreen}
        name="UsersScreen"
      />
      <UsersStack.Screen
        component={UsersDetails}
        name="UsersDetailsScreen"
        options={{ title: "User's details" }}
      />
    </UsersStack.Navigator>
  );
};

export default UsersStackScreen;
