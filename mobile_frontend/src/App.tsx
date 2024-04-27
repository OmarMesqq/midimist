import { React, useEffect, useState } from 'react';
import {
  useColorScheme,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TopBar } from './components/commons/TopBar'
import { BottomBar } from './components/commons/BottomBar'
import { Profile } from './components/layout/Profile';
import { Notifications } from './components/layout/Notifications';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [apiStatus, setApiStatus] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api')
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        console.log(data);
        setApiStatus(data);
      })
      .catch((e) => {
        console.error(">>> Erro ao se conectar com a API: ", e);
      });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        header: () => <TopBar />,
        headerStyle: { height: 54 }
      }}>
        <Stack.Screen name="BottomNavBar" component={BottomBar} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Notifications" component={Notifications} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
