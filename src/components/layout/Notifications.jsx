import { Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, View, Alert } from 'react-native';

export const Notifications = () => {
  const notifPressed = () => {
    Alert.alert('You pressed a notification!');
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={notifPressed}>
        <Image
          style={styles.image}
          source={require('../../assets/images/group.png')}
        />
        <View style = {styles.textContainer}>
          <Text style = {styles.headerText}>Notification</Text>
          <Text style = {styles.descriptionText}>Description</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={notifPressed}>
        <Image
          style={styles.image}
          source={require('../../assets/images/group.png')}
        />
        <View style = {styles.textContainer}>
          <Text style = {styles.headerText}>Notification</Text>
          <Text style = {styles.descriptionText}>Description</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={notifPressed}>
        <Image
          style={styles.image}
          source={require('../../assets/images/group.png')}
        />
        <View style = {styles.textContainer}>
          <Text style = {styles.headerText}>Notification</Text>
          <Text style = {styles.descriptionText}>Description</Text>
        </View>
      </TouchableOpacity>

      <View style = {styles.bottomTextContainer}>
        <Text style = {styles.descriptionText}>3 Total Notifications</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    backgroundColor: '#000'
  },
  button: {
    alignItems: 'left',
    backgroundColor: '#1D1D1D',
    flexDirection: 'row',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 9,
    marginVertical: 7,
  },
   textContainer:{
    marginVertical:4,
    paddingHorizontal: 9,
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  descriptionText: {
    color: '#fff',
  },
  bottomTextContainer: {
    color: '#fff',
    alignItems: 'center'
  },
  image: {
    width: 50,
    height: 50,
  }
});

