import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Image1 = () => {
  return (
    <ImageBackground
      style={styles.image12Icon}
      resizeMode="cover"
      source={require("../assets/image12.png")}
    />
  );
};

const styles = StyleSheet.create({
  image12Icon: {
    width: 97,
    height: 387,
  },
});

export default Image1;
