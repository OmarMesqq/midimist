import { Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

export const Settings = () => {
    const storagePressed = () => {
        // TBD
        }
      
        const privacyPressed = () => {
        // TBD
        }
      
        const notifPressed = () => {
        // TBD
        }
      
        return (
          <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={storagePressed}>
              <Text style = {styles.buttonText}> Storage </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={privacyPressed}>
              <Text style = {styles.buttonText}> Privacy </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={notifPressed}>
              <Text style = {styles.buttonText}> Notifications </Text>
            </TouchableOpacity>
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

