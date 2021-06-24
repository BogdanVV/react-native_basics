import React, { useEffect, useState } from 'react';
import { Text, ScrollView, Button, View, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import LoadingIndicator from '../../components/LoadingIndicator';
import { colors } from '../../assets/colors';

export const UsersScreen = ({ navigation }: any) => {
  const [users, setUsers] = useState([]);
  const [isScreenLoading, setIsScreenLoading] = useState(false);

  useEffect(() => {
    setIsScreenLoading(true);
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(({ data }) => {
        setUsers(data);
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
        {users.map((user: any) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('UsersDetails', { userId: user.id });
            }}
          >
            <View style={styles.usersCard}>
              <Text key={user.id}>{user.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
        <Button
          title="Go back"
          onPress={() => {
            navigation.goBack();
          }}
        />
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
    marginVertical: 10,
  },
});

export default UsersScreen;
