import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { colors } from '../../assets/colors';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.mainWrapper}>
      <Text>Home Screen</Text>
      <View style={styles.navButton}>
        <Button
          title="Go to posts"
          onPress={() => {
            navigation.navigate('PostsScreen');
          }}
        />
      </View>
      <View style={styles.navButton}>
        <Button
          title="Go to users"
          onPress={() => {
            navigation.navigate('UsersScreen');
          }}
        />
      </View>
      <View style={styles.navButton}>
        <Button
          title="Go to todos"
          onPress={() => {
            navigation.navigate('TodosScreen');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: colors.white,
  },
  navButton: {
    width: 200,
    marginVertical: 20,
  },
});

export default HomeScreen;
