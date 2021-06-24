import React, { useEffect, useState } from 'react';
import {
  Text,
  ScrollView,
  Button,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import axios from 'axios';

import LoadingIndicator from '../../components/LoadingIndicator';
import { colors } from '../../assets/colors';

export const PostsScreen = ({ navigation }: any) => {
  const [posts, setPosts] = useState([]);
  const [isScreenLoading, setIsScreenLoading] = useState(false);

  useEffect(() => {
    setIsScreenLoading(true);
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(({ data }) => {
        setPosts(data);
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
        {posts.map((post: any) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('PostsDetails', { id: post.id })}
            key={post.id}
          >
            <View style={styles.postCard}>
              <Image
                style={styles.image}
                source={{ uri: 'https://picsum.photos/id/222/200/300' }}
              />
              <Text>{post.title}</Text>
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
  postCard: {
    flexDirection: 'row',
    borderWidth: 1,
    marginVertical: 10,
  },
  image: {
    width: 150,
    height: 150,
  },
});

export default PostsScreen;
