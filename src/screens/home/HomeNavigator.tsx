import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import { colors } from '../../assets/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: colors.white,
        headerTitleStyle: { fontWeight: '700' },
        headerTitleAlign: 'center',
        gestureEnabled: true,
      }}
      headerMode="float"
    >
      <HomeStack.Screen
        options={{
          title: 'Home',
          headerRight: () => (
            <Icon name="alert-circle-outline" color={colors.white} size={24} />
          ),
          headerRightContainerStyle: {
            marginRight: 15,
          },
        }}
        component={HomeScreen}
        name="HomeScreen"
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
