import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Image2 = () => {
  return (
    <ImageBackground
      style={styles.image13Icon}
      resizeMode="cover"
      source={require("../assets/image13.png")}
    />
  );
};

const styles = StyleSheet.create({
  image13Icon: {
    width: 1044,
    height: 180,
  },
});

export default Image2;
