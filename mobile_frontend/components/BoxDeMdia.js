import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const BoxDeMdia = () => {
  return (
    <View style={styles.boxDeMdia}>
      <View style={styles.generalLayout}>
        <Image
          style={[styles.contextBuittonIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/context-buitton.png")}
        />
        <Text style={[styles.title1, styles.title1Position]}>
          KonoSuba: God's...
        </Text>
        <Image
          style={[styles.anime1Icon, styles.title1Position]}
          contentFit="cover"
          source={require("../assets/anime-13.png")}
        />
      </View>
      <View style={[styles.generalMdia1, styles.generalLayout]}>
        <Image
          style={[styles.contextBuittonIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/context-buitton.png")}
        />
        <Text style={[styles.title1, styles.title1Position]}>
          KonoSuba: God's...
        </Text>
        <Image
          style={[styles.anime1Icon, styles.title1Position]}
          contentFit="cover"
          source={require("../assets/anime-13.png")}
        />
      </View>
      <View style={[styles.generalMdia1, styles.generalLayout]}>
        <Image
          style={[styles.contextBuittonIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/context-buitton.png")}
        />
        <Text style={[styles.title1, styles.title1Position]}>
          KonoSuba: God's...
        </Text>
        <Image
          style={[styles.anime1Icon, styles.title1Position]}
          contentFit="cover"
          source={require("../assets/anime-13.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    right: "0%",
  },
  title1Position: {
    left: "0%",
    position: "absolute",
  },
  generalLayout: {
    height: 208,
    width: 141,
  },
  contextBuittonIcon: {
    height: "7.69%",
    width: "11.35%",
    bottom: "0%",
    left: "88.65%",
    top: "92.31%",
    position: "absolute",
    overflow: "hidden",
    maxWidth: "100%",
    right: "0%",
  },
  title1: {
    fontSize: FontSize.size_smi,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    textAlign: "left",
    top: "92.31%",
  },
  anime1Icon: {
    height: "88.94%",
    width: "100%",
    top: "0%",
    bottom: "11.06%",
    borderRadius: Border.br_3xs,
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    right: "0%",
  },
  generalMdia1: {
    marginLeft: 10,
  },
  boxDeMdia: {
    width: 344,
    flexDirection: "row",
  },
});

export default BoxDeMdia;
