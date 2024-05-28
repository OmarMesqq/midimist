// ChatItem.jsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ChatItem = ({ profileImage, name, lastMessage }) => {
  return (
    <View style={styles.container}>
      <Image source={profileImage} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.lastMessage}>{lastMessage}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    justifyContent: 'center',
  },
  name: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  lastMessage: {
    color: 'gray',
    fontSize: 14,
  },
});

export default ChatItem;
