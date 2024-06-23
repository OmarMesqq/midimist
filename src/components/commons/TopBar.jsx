import { useNavigation } from '@react-navigation/native';
import { StatusBar, Image, StyleSheet, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export const TopBar = () => {
  const navigation = useNavigation();

  const LogoPressed = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <SafeAreaView style={styles.headerContainer}>
      <StatusBar barStyle="light-content" /> 
      <TouchableOpacity onPress={LogoPressed}>
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
      </TouchableOpacity>
      <View style={styles.rightContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Notes')}>
          <Image source={require('../../assets/images/new_note.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Image source={require('../../assets/images/notifications.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={require('../../assets/images/profile.png')} style={styles.icon} />
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
    width: 32,
    height: 32,
    resizeMode: 'contain',
    marginLeft: 15,
  }
});
