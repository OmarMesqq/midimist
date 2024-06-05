import React from 'react';
import { useColorScheme, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TopBar } from './src/components/commons/TopBar';
import { BottomBar } from './src/components/commons/BottomBar';
import { Profile } from './src/components/layout/Profile';
import { Notifications } from './src/components/layout/Notifications';
import { ChatDetails } from './src/components/layout/ChatDetails';
import { MovieDetails } from './src/components/layout/MovieDetails';

const Stack = createNativeStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider style={styles.appStyle}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="BottomNavBar" 
            component={BottomBar} 
            options={{
              header: (props) => <TopBar {...props} />
            }}
          />
          <Stack.Screen 
            name="Profile" 
            component={Profile} 
            options={{
              header: (props) => <TopBar {...props} />
            }}
          />
          <Stack.Screen 
            name="Notifications" 
            component={Notifications} 
            options={{
              header: (props) => <TopBar {...props} />
            }}
          />
          <Stack.Screen 
            name="ChatDetails" 
            component={ChatDetails} 
            options={{
              header: (props) => <TopBar {...props} />
            }}
          />
          <Stack.Screen 
            name="MovieDetails" 
            component={MovieDetails} 
            options={{
              header: (props) => <TopBar {...props} />
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  appStyle: { flex: 1, backgroundColor: "#000" }
});

export default App;
