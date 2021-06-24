import React, { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
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
      <ScrollView>
        {todos.map((todo: any) => (
          <Text key={todo.id}>{todo.title}</Text>
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
});

export default TodosScreen;
