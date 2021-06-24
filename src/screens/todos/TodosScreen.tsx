import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';

import LoadingIndicator from '../../components/LoadingIndicator';
import { colors } from '../../assets/colors';

export const TodosScreen = ({ navigation }: any) => {
  const [todos, setTodos] = useState([]);
  const [isScreenLoading, setIsScreenLoading] = useState(false);

  useEffect(() => {
    setIsScreenLoading(true);
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(({ data }) => {
        setTodos(data);
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
      <Text>
        Flatlist. Facing issue with not responding TouchableOpacity on the 1st
        press
      </Text>
      <FlatList
        data={todos}
        renderItem={({ item }: any) => (
          <TouchableOpacity
            key={Math.random()}
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('TodosDetails', { todoId: item.id });
            }}
          >
            <View style={styles.todoCard}>
              <Image
                style={styles.image}
                source={{ uri: `https://picsum.photos/id/222/200/300` }}
              />
              <Text key={item.id}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
  },
  todoCard: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default TodosScreen;
