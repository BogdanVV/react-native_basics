import React, { useEffect, useState } from 'react';
import {
  Text,
  ScrollView,
  Button,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
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
            key={user.id}
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('UsersDetails', { userId: user.id });
            }}
          >
            <View style={styles.usersCard}>
              <Image
                style={styles.image}
                source={{ uri: 'https://picsum.photos/id/222/200/300' }}
              />
              <Text>{user.name}</Text>
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
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});

export default UsersScreen;
