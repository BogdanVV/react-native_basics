import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/home/HomeScreen';
import TodosScreen from './src/screens/todos/TodosScreen';
import PostsScreen from './src/screens/posts/PostsScreen';
import UsersScreen from './src/screens/users/UsersScreen';
import PostsDetails from './src/screens/posts/PostsDetails';
import UsersDetails from './src/screens/users/UsersDetails';
import TodosDetails from './src/screens/todos/TodosDetails';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="UsersScreen"
          component={UsersScreen}
          options={{ title: 'Users' }}
        />
        <Stack.Screen
          name="PostsScreen"
          component={PostsScreen}
          options={{ title: 'Posts' }}
        />
        <Stack.Screen
          name="TodosScreen"
          component={TodosScreen}
          options={{ title: 'Todos' }}
        />
        <Stack.Screen
          name="PostsDetails"
          component={PostsDetails}
          options={{ title: "Post's details" }}
        />
        <Stack.Screen
          name="UsersDetails"
          component={UsersDetails}
          options={{ title: "User's details" }}
        />
        <Stack.Screen
          name="TodosDetails"
          component={TodosDetails}
          options={{ title: "Todo's details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
