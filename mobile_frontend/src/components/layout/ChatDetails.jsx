import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatDetail = ({ route }) => {
  const { chatId } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chat Detail for Chat ID: {chatId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default ChatDetail;
