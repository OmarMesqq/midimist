import React from 'react';
import { useColorScheme, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TopBar } from './src/components/commons/TopBar';
import { BottomBar } from './src/components/commons/BottomBar';
import { Profile } from './src/components/layout/Profile';
import { Notifications } from './src/components/layout/Notifications';
import { Settings } from './src/components/layout/Settings';
import { Notes } from './src/components/layout/Notes';
import { ChatDetails } from './src/components/layout/ChatDetails';
import { MovieDetails } from './src/components/layout/MovieDetails';

const Stack = createNativeStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider style={styles.appStyle}>
      <NavigationContainer>
	  <Stack.Navigator
  		screenOptions={{
		    header: (props) => <TopBar {...props} />,
  		}}
>
  <Stack.Screen name="BottomNavBar" component={BottomBar} />
  <Stack.Screen name="Profile" component={Profile} />
  <Stack.Screen name="Notifications" component={Notifications} />
  <Stack.Screen name="Settings" component={Settings} />
  <Stack.Screen name="Notes" component={Notes} />
  <Stack.Screen name="ChatDetails" component={ChatDetails} />
  <Stack.Screen name="MovieDetails" component={MovieDetails} />
</Stack.Navigator>

     </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  appStyle: { flex: 1, backgroundColor: "#000" }
});

export default App;
