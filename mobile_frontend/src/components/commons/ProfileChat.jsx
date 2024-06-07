// ProfileChat.jsx
import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileButton = ({ profileImage, status }) => {
  const getStatusStyle = (status) => {
    switch (status) {
      case 'online':
        return styles.statusOnline;
      case 'offline':
        return styles.statusOffline;
      case 'busy':
        return styles.statusBusy;
      case 'away':
        return styles.statusAway;
      default:
        return styles.statusOffline;
    }
  };

  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Image source={profileImage} style={styles.image} />
        <View style={[styles.status, getStatusStyle(status)]} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white',
  },
  status: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 15,
    height: 15,
    borderRadius: 7.5,
    borderWidth: 2,
    borderColor: 'white',
  },
  statusOnline: {
    backgroundColor: 'green',
  },
  statusOffline: {
    backgroundColor: 'gray',
  },
  statusBusy: {
    backgroundColor: 'red',
  },
  statusAway: {
    backgroundColor: 'yellow',
  },
});

export default ProfileButton;
