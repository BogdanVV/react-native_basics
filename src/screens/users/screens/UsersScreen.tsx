import React, { useEffect, useState } from 'react';
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import axios from 'axios';
import LoadingIndicator from '../../../components/LoadingIndicator';
import { colors } from '../../../assets/colors';

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
      .catch(err => {
        console.log(err);
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
      <View style={styles.listContainer}>
        <ScrollView>
          <View style={styles.itemsContainer}>
            {users.map((user: any) => (
              <TouchableOpacity
                style={styles.usersCard}
                key={user.id}
                activeOpacity={0.8}
                onPress={() => {
                  navigation.navigate('UsersDetailsScreen', { userId: user.id });
                }}
              >
                <Image
                  style={styles.image}
                  source={{ uri: 'https://picsum.photos/id/222/200/300' }}
                />
                <Text style={styles.userName}>{user.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
  },
  listContainer: {
    flex: 1,
    marginRight: -10,
  },
  itemsContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  usersCard: {
    alignItems: 'center',
    borderWidth: 2,
    padding: 10,
    marginTop: 10,
    marginRight: 10,
    width: 150,
    borderColor: colors.primarySecond,
    borderRadius: 10,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  userName: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
    color: colors.primarySecond,
  },
});

export default UsersScreen;
