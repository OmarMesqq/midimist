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
  },
  status: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 10,
    height: 10,
    borderRadius: 7.5,
  },
  statusOnline: {
    backgroundColor: '#96FF7C',
  },
  statusOffline: {
    backgroundColor: 'gray',
  },
  statusBusy: {
    backgroundColor: '#FF4747',
  },
  statusAway: {
    backgroundColor: '#FFF847',
  },
});

export default ProfileButton;
