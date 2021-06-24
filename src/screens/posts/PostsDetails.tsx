import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import LoadingIndicator from '../../components/LoadingIndicator';
import { colors } from '../../assets/colors';

const PostsDetails = ({ route }: any) => {
  const [post, setPost]: any = useState(null);
  const [isScreenLoading, setIsScreenLoading] = useState(false);

  useEffect(() => {
    setIsScreenLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
      .then(({ data }) => {
        setPost(data);
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
        <View style={styles.cardWrapper}>
          <Text>Post's id: {post?.id}</Text>
          <Text>Post's title: {post?.title}</Text>
          <Text>Post's body: {post?.body}</Text>
          <Text>User's id: {post?.userId}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: colors.white,
  },
  cardWrapper: {
    borderWidth: 1,
    padding: 10,
  },
});

export default PostsDetails;
