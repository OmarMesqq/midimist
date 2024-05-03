import { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TopBar } from './src/components/commons/TopBar'
import { BottomBar } from './src/components/commons/BottomBar'
import { Profile } from './src/components/layout/Profile';
import { Notifications } from './src/components/layout/Notifications';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Stack = createNativeStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [activeComponent, setActiveComponent] = useState('Home');
  // const [apiStatus, setApiStatus] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:8080/api')
  //     .then((res) => {
  //       return res.text();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setApiStatus(data);
  //     })
  //     .catch((e) => {
  //       console.error(">>> Erro ao se conectar com a API: ", e);
  //     });
  // }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{
        header: () => <TopBar setActiveComponent={setActiveComponent} />,
        // headerStyle: { height: 54 }
      }}>
        <Stack.Screen name="BottomNavBar" component={BottomBar} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Notifications" component={Notifications} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

