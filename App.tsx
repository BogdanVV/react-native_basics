import React from 'react';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { colors } from './src/assets/colors';
import HomeStackScreen from './src/screens/home/HomeNavigator';
import PostsStackScreen from './src/screens/posts/PostsNavigator';
import TodosStackScreen from './src/screens/todos/TodosNavigator';
import UsersStackScreen from './src/screens/users/UsersNavigator';
import ProfileStackScreen from './src/screens/profile/ProfileStackScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: colors.primary,
        }}
      >
        <Tab.Screen
          component={HomeStackScreen}
          name="Home"
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name={focused ? 'home' : 'home-outline'}
                size={24}
                color={focused ? colors.primary : 'grey'}
              />
            ),
          }}
        />
        <Tab.Screen
          component={PostsStackScreen}
          name="Posts"
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name={focused ? 'albums' : 'albums-outline'}
                size={24}
                color={focused ? colors.primary : 'grey'}
              />
            ),
          }}
        />
        <Tab.Screen
          component={UsersStackScreen}
          name="Users"
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name={focused ? 'people' : 'people-outline'}
                size={24}
                color={focused ? colors.primary : 'grey'}
              />
            ),
          }}
        />
        <Tab.Screen
          component={TodosStackScreen}
          name="Todos"
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name={
                  focused
                    ? 'checkmark-done-circle'
                    : 'checkmark-done-circle-outline'
                }
                size={24}
                color={focused ? colors.primary : 'grey'}
              />
            ),
          }}
        />
        <Tab.Screen
          component={ProfileStackScreen}
          name="Profile"
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name={focused ? 'person-circle' : 'person-circle-outline'}
                size={24}
                color={focused ? colors.primary : 'grey'}
              />
            ),
          }}
        />
      </Tab.Navigator>
      {/*<Stack.Navigator*/}
      {/*  screenOptions={{*/}
      {/*    headerStyle: { backgroundColor: colors.primary },*/}
      {/*    headerTintColor: colors.white,*/}
      {/*    headerTitleStyle: { fontWeight: '700' },*/}
      {/*    headerTitleAlign: 'center',*/}
      {/*    gestureEnabled: true,*/}
      {/*    // headerRight: () => <Text>123</Text>,*/}
      {/*  }}*/}
      {/*  headerMode="float"*/}
      {/*>*/}
      {/*</Stack.Navigator>*/}
    </NavigationContainer>
  );
};

export default App;
