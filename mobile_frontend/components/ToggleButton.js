import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Border, Color } from "../GlobalStyles";

const ToggleButton = () => {
  return (
    <View style={styles.toggleButton}>
      <View style={[styles.property1default, styles.property1defaultLayout]}>
        <View style={styles.property1defaultChild} />
        <Image
          style={[styles.property1defaultItem, styles.itemLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={[styles.list13Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/list1-3.png")}
        />
        <Image
          style={[styles.squares1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/squares-1.png")}
        />
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <View style={styles.property1defaultChild} />
        <Image
          style={[styles.property1variant2Item, styles.itemLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={[styles.list13Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/list1-31.png")}
        />
        <Image
          style={[styles.squares1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/squares-11.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1defaultLayout: {
    height: 28,
    width: 61,
    position: "absolute",
  },
  itemLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "7.14%",
    top: "7.14%",
    width: "39.34%",
    height: "85.71%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    bottom: "14.29%",
    top: "14.29%",
    width: "32.79%",
    height: "71.43%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  property1defaultChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_8xl,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  property1defaultItem: {
    right: "54.1%",
    left: "6.56%",
  },
  list13Icon: {
    right: "14.75%",
    left: "52.46%",
  },
  squares1Icon: {
    right: "57.38%",
    left: "9.84%",
  },
  property1default: {
    top: 20,
    left: 20,
  },
  property1variant2Item: {
    right: "11.48%",
    left: "49.18%",
  },
  property1variant2: {
    top: 65,
    left: 21,
  },
  toggleButton: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 101,
    height: 116,
    overflow: "hidden",
  },
});

export default ToggleButton;
