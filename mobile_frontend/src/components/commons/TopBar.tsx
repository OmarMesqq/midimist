import { Image, StyleSheet, Text, View } from "react-native";

export const TopBar = () => {
  return (
    <View style={styles.headerContainer}>
	<Image source={require('../../assets/images/logo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 54,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#000000', // Set the background color as needed
  },
  logo: {
    width: 60,
    height: 40,
    resizeMode: 'contain',
  }
});

