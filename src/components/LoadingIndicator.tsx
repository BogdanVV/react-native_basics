import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LoadingIndicator = () => {
  return (
    <View style={styles.loadingContainer}>
      <Text>Loading ............</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingIndicator;
