const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import MdiaGenrica from "./components/MdiaGenrica";
import BottomNavBar from "./components/BottomNavBar";
import Header from "./components/Header";
import MdiaGenrica1 from "./components/MdiaGenrica1";
import Image1 from "./components/Image1";
import Review from "./components/Review";
import GenerosDeMdia from "./components/GenerosDeMdia";
import Image2 from "./components/Image2";
import GeneralMdia from "./components/GeneralMdia";
import MediumGeneralMdia from "./components/MediumGeneralMdia";
import SmallGeneralMdia from "./components/SmallGeneralMdia";
import FrameComponentSet from "./components/FrameComponentSet";
import MyListMovies from "./components/MyListMovies";
import ToggleButton from "./components/ToggleButton";
import TipoMdia from "./components/TipoMdia";
import BoxDeMdia from "./components/BoxDeMdia";
import Top1 from "./components/Top1";
import Perfil from "./screens/Perfil";
import Generos from "./screens/Generos";
import Conversas from "./screens/Conversas";
import Pesquisa from "./screens/Pesquisa";
import Pesquisa1 from "./screens/Pesquisa1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-ExtraLight": require("./assets/fonts/Inter-ExtraLight.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Perfil"
              component={Perfil}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Generos"
              component={Generos}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Conversas"
              component={Conversas}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pesquisa"
              component={Pesquisa}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pesquisa1"
              component={Pesquisa1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
