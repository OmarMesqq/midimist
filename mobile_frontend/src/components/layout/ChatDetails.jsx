import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ChatDetails = ({ route }) => {
  const { chatId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detalhes do Chat {chatId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});

export default ChatDetails;
