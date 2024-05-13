import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export const TopBar = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </TouchableOpacity>

      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Image source={require('../../assets/notifications.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={require('../../assets/profile.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginLeft: 15,
  }
});
