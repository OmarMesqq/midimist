import React from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList } from 'react-native';
import ProfileButton from '../commons/ProfileChat';
import ChatItem from '../commons/ChatItem';

export const Chat = ({ navigation }) => {
  const friends = [
    { profileImage: require('../../assets/images/profile.png'), status: 'online' },
    { profileImage: require('../../assets/images/profile.png'), status: 'offline' },
    { profileImage: require('../../assets/images/profile.png'), status: 'busy' },
    { profileImage: require('../../assets/images/profile.png'), status: 'away' },
    { profileImage: require('../../assets/images/profile.png'), status: 'online' },
    { profileImage: require('../../assets/images/profile.png'), status: 'offline' },
    { profileImage: require('../../assets/images/profile.png'), status: 'busy' },
    { profileImage: require('../../assets/images/profile.png'), status: 'away' },
    { profileImage: require('../../assets/images/profile.png'), status: 'online' },
    { profileImage: require('../../assets/images/profile.png'), status: 'offline' },
    { profileImage: require('../../assets/images/profile.png'), status: 'busy' },
    { profileImage: require('../../assets/images/profile.png'), status: 'away' },
    { profileImage: require('../../assets/images/profile.png'), status: 'online' },
  ];

  const chats = [
    { id: '1', profileImage: require('../../assets/images/profile.png'), name: 'User 2', lastMessage: 'Last Message' },
    { id: '2', profileImage: require('../../assets/images/profile.png'), name: 'Group 1', lastMessage: 'You: Message' },
    { id: '3', profileImage: require('../../assets/images/profile.png'), name: 'Group 2', lastMessage: 'You: Message' },
    { id: '4', profileImage: require('../../assets/images/profile.png'), name: 'Group 3', lastMessage: 'You: Message' },
    { id: '5', profileImage: require('../../assets/images/profile.png'), name: 'Group 4', lastMessage: 'You: Message' },
    { id: '6', profileImage: require('../../assets/images/profile.png'), name: 'Group 5', lastMessage: 'You: Message' },
    { id: '7', profileImage: require('../../assets/images/profile.png'), name: 'Group 6', lastMessage: 'You: Message' },
  ];

  return (
    <View style={styles.home}>
      <Text style={styles.headerText}>Friends</Text>
      <ScrollView horizontal style={styles.scrollContainer} contentContainerStyle={styles.scrollContentContainer} showsHorizontalScrollIndicator={false}>
        {friends.map((friend, index) => (
          <ProfileButton
            key={index}
            profileImage={friend.profileImage}
            status={friend.status}
          />
        ))}
      </ScrollView>
      <Text style={styles.headerText}>Chats</Text>
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
        style={styles.chatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
    paddingTop: 40, // Adiciona espaço no topo
  },
  scrollContainer: {
    flexDirection: 'row',
  },
  scrollContentContainer: {
    alignItems: 'flex-start', // Alinha os itens no topo
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  chatList: {
    marginTop: 10,
  },
});

export default Chat;
