import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../assets/colors';
import axios from 'axios';
import LoadingIndicator from '../../../components/LoadingIndicator';

const TodosDetails = ({ route }: any) => {
  const [todo, setTodo]: any = useState(null);
  const [isScreenLoading, setIsScreenLoading] = useState(false);

  useEffect(() => {
    setIsScreenLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${route.params.todoId}`)
      .then(({ data }) => {
        setTodo(data);
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
      <View style={styles.todosCard}>
        <Image
          style={styles.image}
          source={{ uri: 'https://picsum.photos/id/222/200/300' }}
        />
        <Text>{todo?.id}</Text>
        <Text>{todo?.userId}</Text>
        <Text>{todo?.title}</Text>
        <Text>{todo?.completed}</Text>
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
  todosCard: {
    borderWidth: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
});

export default TodosDetails;
