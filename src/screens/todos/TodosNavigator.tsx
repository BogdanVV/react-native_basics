import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TodosScreen from './screens/TodosScreen';
import TodosDetails from './screens/TodosDetails';
import { colors } from '../../assets/colors';

const TodosStack = createStackNavigator();

const TodosStackScreen = () => {
  return (
    <TodosStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: colors.white,
        headerTitleStyle: { fontWeight: '700' },
        headerTitleAlign: 'center',
        gestureEnabled: true,
        // headerRight: () => <Text>123</Text>,
      }}
      headerMode="none"
    >
      <TodosStack.Screen
        component={TodosScreen}
        name="TodosScreen"
        options={{ title: 'Todos' }}
      />
      <TodosStack.Screen
        component={TodosDetails}
        name="TodosDetailsScreen"
        options={{ title: "Todo's details" }}
      />
    </TodosStack.Navigator>
  );
};

export default TodosStackScreen;
