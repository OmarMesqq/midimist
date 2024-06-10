import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ChatItem = ({ profileImage, name, lastMessage, chatId, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('ChatDetails', { chatId })}
    >
      <Image source={profileImage} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.lastMessage}>{lastMessage}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#1D1D1D',
    borderRadius: 10,
    marginBottom: 10,
  },
  image: {
    width: 45,
    height: 45,
    marginRight: 10,
  },
  textContainer: {
    justifyContent: 'center',
  },
  name: {
    color: '#fff',
    fontSize: 14,
  },
  lastMessage: {
    color: 'gray',
    fontSize: 12,
  },
});

export default ChatItem;
