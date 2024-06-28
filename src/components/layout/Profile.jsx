import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

export const Profile = () => {
  const navigation = useNavigation();
  const settingsPressed = () => {
      navigation.navigate('Settings')
    }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}>
      <Text style={{color: '#fff'}}> Profile Screen </Text>
      <TouchableOpacity style={styles.button} onPress={settingsPressed}>
        <Text style = {styles.buttonText}> Settings</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#1D1D1D',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 9,
    marginVertical: 7
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});

