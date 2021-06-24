import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { colors } from '../../assets/colors';
import axios from 'axios';
import LoadingIndicator from '../../components/LoadingIndicator';

const UsersDetails = ({ route }: any) => {
  const [user, setUser]: any = useState(null);
  const [isScreenLoading, setIsScreenLoading] = useState(false);

  useEffect(() => {
    setIsScreenLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${route.params.userId}`)
      .then(({ data }) => {
        setUser(data);
      })
      .finally(() => {
        setIsScreenLoading(false);
      });
  }, []);

  if (isScreenLoading) {
    return <LoadingIndicator />;
  }

  return (
    <View style={styles.mainWrapper}>
      <ScrollView>
        <View style={styles.usersCard}>
          <Text>ID: {user?.id}</Text>
          <Text>Name: {user?.name}</Text>
          <Text>Username: {user?.username}</Text>
          <Text>Email: {user?.email}</Text>
          <Text>Email: {JSON.stringify(user?.address)}</Text>
          <Text>Phone: {user?.phone}</Text>
          <Text>Website: {user?.website}</Text>
          <Text>Company: {JSON.stringify(user?.company)}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
  },
  usersCard: {
    borderWidth: 1,
    padding: 10,
  },
});

export default UsersDetails;
