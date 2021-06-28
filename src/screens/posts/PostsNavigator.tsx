import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PostsScreen from './screens/PostsScreen';
import PostsDetails from './screens/PostsDetails';
import { colors } from '../../assets/colors';

const PostsStack = createStackNavigator();

const PostsStackScreen = () => {
  return (
    <PostsStack.Navigator
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
      <PostsStack.Screen
        component={PostsScreen}
        name="PostsScreen"
        options={{ title: 'Posts' }}
      />
      <PostsStack.Screen
        component={PostsDetails}
        name="PostsDetailsScreen"
        options={({ route }: any) => ({
          title: `Post's ${route.params.postId} details`,
        })}
      />
    </PostsStack.Navigator>
  );
};

export default PostsStackScreen;
