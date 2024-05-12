import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Review = () => {
  return (
    <View style={styles.review1}>
      <LinearGradient
        style={[styles.property1review1, styles.backgroundBg]}
        locations={[0, 1]}
        colors={["#33f5f0", "#043737"]}
      >
        <LinearGradient
          style={[styles.background, styles.backgroundPosition]}
          locations={[0, 1]}
          colors={["#33f5f0", "#043737"]}
        />
        <View style={[styles.foreground, styles.backgroundPosition]}>
          <View style={styles.upbarReviews}>
            <Image
              style={styles.profileIcon}
              contentFit="cover"
              source={require("../assets/profile-icon2.png")}
            />
            <Text style={[styles.username, styles.timeTypo]}>User</Text>
            <Text style={[styles.time, styles.timeTypo]}>1:53</Text>
          </View>
          <View style={styles.contentReviews}>
            <Text style={[styles.text, styles.timeTypo]}>
              Um dos melhores animes de todos os tempos!
            </Text>
            <Image
              style={styles.image7Icon}
              contentFit="cover"
              source={require("../assets/image-71.png")}
            />
          </View>
        </View>
      </LinearGradient>
      <View style={[styles.property1review2, styles.property1reviewPosition]}>
        <LinearGradient
          style={[styles.background, styles.backgroundPosition]}
          locations={[0, 1]}
          colors={["#f53333", "#043737"]}
        />
        <View style={[styles.foreground, styles.backgroundPosition]}>
          <View style={styles.upbarReviews}>
            <Image
              style={styles.profileIcon}
              contentFit="cover"
              source={require("../assets/profile-icon2.png")}
            />
            <Text style={[styles.username, styles.timeTypo]}>User</Text>
            <Text style={[styles.time, styles.timeTypo]}>1:53</Text>
          </View>
          <View style={styles.contentReviews}>
            <Text style={[styles.text, styles.timeTypo]}>
              This was definitely a great watch!
            </Text>
            <Image
              style={styles.image7Icon}
              contentFit="cover"
              source={require("../assets/image-72.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundBg: {
    backgroundColor: "transparent",
    borderRadius: Border.br_xl,
  },
  backgroundPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  timeTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  property1reviewPosition: {
    left: "6.58%",
    right: "6.58%",
    width: "86.84%",
    height: "43.02%",
    position: "absolute",
  },
  background: {
    backgroundColor: "transparent",
    borderRadius: Border.br_xl,
  },
  profileIcon: {
    width: 34,
    height: 34,
  },
  username: {
    fontSize: FontSize.size_xl,
    display: "flex",
    alignItems: "center",
    width: 164,
    marginLeft: 10,
  },
  time: {
    fontSize: FontSize.size_xs,
    textDecoration: "underline",
    marginLeft: 10,
  },
  upbarReviews: {
    flexDirection: "row",
  },
  text: {
    fontSize: FontSize.size_base,
    width: 134,
    height: 57,
  },
  image7Icon: {
    borderRadius: Border.br_3xs,
    width: 100,
    height: 131,
    marginLeft: 10,
  },
  contentReviews: {
    marginLeft: 10,
    flexDirection: "row",
  },
  foreground: {
    flexWrap: "wrap",
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  property1review1: {
    top: "4.65%",
    bottom: "52.33%",
    left: "6.58%",
    right: "6.58%",
    width: "86.84%",
    height: "43.02%",
    position: "absolute",
  },
  property1review2: {
    top: "52.33%",
    bottom: "4.65%",
  },
  review1: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 304,
    height: 430,
    overflow: "hidden",
  },
});

export default Review;
