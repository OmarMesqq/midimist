import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export const TopBar = () => {
  const navigation = useNavigation();

  const navigateToNotifications = () => {
    navigation.navigate('Notifications');
  };

  const navigateToProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.headerContainer}>
      <Image source={require('../../assets/images/logo.png')} style={styles.logo} />

      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={navigateToNotifications}>
          <Image source={require('../../assets/images/notifications.png')} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToProfile}>
          <Image source={require('../../assets/images/profile.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 54,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#000000',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  rightContainer: {
    flexDirection: 'row', // Keep the notification and profile icons side by side
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginLeft: 15,
    marginRight: 5,
  }
});
