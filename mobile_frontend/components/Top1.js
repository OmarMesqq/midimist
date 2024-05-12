import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Padding } from "../GlobalStyles";

const Top1 = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={[styles.top, styles.topFlexBox]}
      locations={[0, 1]}
      colors={["#000", "rgba(0, 0, 0, 0)"]}
    >
      <Pressable
        style={styles.logoButtonLayout}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/logo-button.png")}
        />
      </Pressable>
      <View style={[styles.bell11Parent, styles.topFlexBox]}>
        <Image
          style={styles.bell11Icon}
          contentFit="cover"
          source={require("../assets/bell1-1.png")}
        />
        <Pressable
          style={[styles.profileIcon, styles.logoButtonLayout]}
          onPress={() => navigation.navigate("Perfil")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/profile-icon1.png")}
          />
        </Pressable>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  topFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  logoButtonLayout: {
    height: 32,
    width: 32,
  },
  icon: {
    maxWidth: 32,
    maxHeight: 32,
  },
  bell11Icon: {
    width: 16,
    height: 16,
  },
  profileIcon: {
    marginLeft: 6,
  },
  bell11Parent: {
    justifyContent: "center",
  },
  top: {
    width: 360,
    height: 40,
    justifyContent: "space-between",
    paddingLeft: Padding.p_8xs,
    paddingRight: Padding.p_3xs,
    backgroundColor: "transparent",
  },
});

export default Top1;
