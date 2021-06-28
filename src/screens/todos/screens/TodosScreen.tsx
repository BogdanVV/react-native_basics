import React, { useEffect, useState } from 'react';
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';

import LoadingIndicator from '../../../components/LoadingIndicator';
import { colors } from '../../../assets/colors';

export const TodosScreen = ({ navigation }: any) => {
  const [todos, setTodos] = useState([]);
  const [isScreenLoading, setIsScreenLoading] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    setIsScreenLoading(true);
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(({ data }) => {
        setTodos(data);
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
      <Modal visible={isDeleteModalVisible} transparent style={{ flex: 1 }}>
        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 2,
              width: 250,
              backgroundColor: colors.white,
            }}
          >
            <Text>Are you sure tou want to delete this item?</Text>
            <View style={{ flexDirection: 'row' }}>
              <Button
                title="Delete"
                onPress={() => {
                  setTodos(todos.filter((todo: any) => todo.id !== selectedItemId));
                  setIsDeleteModalVisible(false);
                }}
                color={colors.danger}
              />
              <Button
                title="Cancel"
                onPress={() => {
                  setIsDeleteModalVisible(false);
                  setSelectedItemId(null);
                }}
                color={colors.grey}
              />
            </View>
          </View>
        </View>
      </Modal>
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
              navigation.navigate('TodosDetailsScreen', { todoId: item.id });
            }}
          >
            <View style={styles.todoCard}>
              <TouchableOpacity
                style={styles.closeButtonContainer}
                onPress={() => {
                  setSelectedItemId(item.id);
                  setIsDeleteModalVisible(true);
                }}
              >
                <Icon name="close-circle-outline" size={26} />
              </TouchableOpacity>
              <Text style={styles.todoTitle}>{item.title}</Text>
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
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  closeButtonContainer: {
    marginRight: 20,
  },
  todoTitle: {
    fontSize: 16,
    flex: 1,
    flexWrap: 'wrap',
  },
});

export default TodosScreen;
