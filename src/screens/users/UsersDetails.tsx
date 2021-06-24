import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
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
          <Image
            style={styles.image}
            source={{ uri: 'https://picsum.photos/id/222/200/300' }}
          />
          <View style={styles.usersInfoContainer}>
            <Text>ID: {user?.id}</Text>
            <Text>Name: {user?.name}</Text>
            <Text>Username: {user?.username}</Text>
            <Text>Email: {user?.email}</Text>
            <Text>Email: {JSON.stringify(user?.address)}</Text>
            <Text>Phone: {user?.phone}</Text>
            <Text>Website: {user?.website}</Text>
            <Text>Company: {JSON.stringify(user?.company)}</Text>
          </View>
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
  usersInfoContainer: {},
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    borderRadius: 75,
  },
});

export default UsersDetails;
