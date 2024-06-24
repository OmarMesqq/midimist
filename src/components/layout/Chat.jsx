import React from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList } from 'react-native';
import ProfileButton from '../commons/ProfileChat';
import ChatItem from '../commons/ChatItem';

export const Chat = ({ navigation }) => {
  const friends = [
    { profileImage: require('../../assets/images/profile.png'), status: 'online' },
    { profileImage: require('../../assets/images/profile.png'), status: 'online' },
    { profileImage: require('../../assets/images/profile.png'), status: 'busy' },
    { profileImage: require('../../assets/images/profile.png'), status: 'away' },
    { profileImage: require('../../assets/images/profile.png'), status: 'offline' },
    { profileImage: require('../../assets/images/profile.png'), status: 'offline' },
    { profileImage: require('../../assets/images/profile.png'), status: 'offline' },
  ];

  const chats = [
    { id: '1', profileImage: require('../../assets/images/profile.png'), name: 'User', lastMessage: 'You: Message' },
    { id: '2', profileImage: require('../../assets/images/profile.png'), name: 'User', lastMessage: 'User: Message' },
    { id: '3', profileImage: require('../../assets/images/group.png'), name: 'Group 1', lastMessage: 'You: Message' },
    { id: '4', profileImage: require('../../assets/images/group.png'), name: 'Group 2', lastMessage: 'User: Message' },
    { id: '5', profileImage: require('../../assets/images/group.png'), name: 'Group 3', lastMessage: 'You: Message' },
    { id: '6', profileImage: require('../../assets/images/group.png'), name: 'Group 4', lastMessage: 'User: Message' },
    { id: '7', profileImage: require('../../assets/images/group.png'), name: 'Group 5', lastMessage: 'You: Message' },
    { id: '8', profileImage: require('../../assets/images/group.png'), name: 'Group 6', lastMessage: 'You: Message' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Friends</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {friends.map((friend, index) => (
          <ProfileButton
            key={index}
            profileImage={friend.profileImage}
            status={friend.status}
          />
        ))}
      </ScrollView>
      <Text style={styles.header}>Chats</Text>
      <FlatList 
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatItem
            profileImage={item.profileImage}
            name={item.name}
            lastMessage={item.lastMessage}
            chatId={item.id}
            navigation={navigation}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    marginTop: -20,
    padding: 13,
  },
  header: {
    fontSize: 20,
    color: '#fff',
    marginVertical: 15,
    textAlign: 'left',
  },
});

export default Chat;
