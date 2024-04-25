import {React, useEffect, useState} from 'react';
import {
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from './components/layout/Home'
import { TopBar } from './components/commons/TopBar'

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
	console.error(">>> ERROR: ", e);
      });
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        header: () => <TopBar />,
        headerStyle: { height: 54 } 
      }}>
        <Stack.Screen name="Home" component={Home} />
        {/* Add more screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
