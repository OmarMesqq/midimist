import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Border, Color, Padding } from "../GlobalStyles";

const SmallGeneralMdia = () => {
  return (
    <View style={styles.smallGeneralMdia}>
      <View style={styles.property1defaultLayout}>
        <Image
          style={[styles.anime1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/anime-12.png")}
        />
        <Image
          style={styles.profileIcon}
          contentFit="cover"
          source={require("../assets/profile-icon3.png")}
        />
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <Image
          style={[styles.anime1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/anime-22.png")}
        />
        <Image
          style={styles.profileIcon}
          contentFit="cover"
          source={require("../assets/profile-icon3.png")}
        />
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <Image
          style={[styles.anime1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/anime-32.png")}
        />
        <Image
          style={styles.profileIcon}
          contentFit="cover"
          source={require("../assets/profile-icon3.png")}
        />
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <Image
          style={[styles.anime1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/game-12.png")}
        />
        <Image
          style={styles.profileIcon}
          contentFit="cover"
          source={require("../assets/profile-icon3.png")}
        />
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <Image
          style={[styles.anime1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/game-22.png")}
        />
        <Image
          style={styles.profileIcon}
          contentFit="cover"
          source={require("../assets/profile-icon3.png")}
        />
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <Image
          style={[styles.anime1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/game-32.png")}
        />
        <Image
          style={styles.profileIcon}
          contentFit="cover"
          source={require("../assets/profile-icon3.png")}
        />
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <Image
          style={[styles.anime1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-75.png")}
        />
        <Image
          style={styles.profileIcon}
          contentFit="cover"
          source={require("../assets/profile-icon3.png")}
        />
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <Image
          style={[styles.anime1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-63.png")}
        />
        <Image
          style={styles.profileIcon}
          contentFit="cover"
          source={require("../assets/profile-icon3.png")}
        />
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <Image
          style={[styles.image8Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-83.png")}
        />
        <Image
          style={styles.profileIcon}
          contentFit="cover"
          source={require("../assets/profile-icon3.png")}
        />
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <Image
          style={[styles.image8Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-92.png")}
        />
        <Image
          style={styles.profileIcon}
          contentFit="cover"
          source={require("../assets/profile-icon3.png")}
        />
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <Image
          style={[styles.anime1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-103.png")}
        />
        <Image
          style={styles.profileIcon}
          contentFit="cover"
          source={require("../assets/profile-icon3.png")}
        />
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <Image
          style={[styles.anime1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-22.png")}
        />
        <Image
          style={styles.profileIcon}
          contentFit="cover"
          source={require("../assets/profile-icon3.png")}
        />
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <Image
          style={[styles.anime1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-33.png")}
        />
        <Image
          style={styles.profileIcon}
          contentFit="cover"
          source={require("../assets/profile-icon3.png")}
        />
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <Image
          style={[styles.anime1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-44.png")}
        />
        <Image
          style={styles.profileIcon}
          contentFit="cover"
          source={require("../assets/profile-icon3.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_3xs,
    left: "0%",
    right: "0%",
    width: "100%",
    height: "88.98%",
    position: "absolute",
    overflow: "hidden",
  },
  property1defaultLayout: {
    height: 118,
    width: 80,
  },
  anime1Icon: {
    top: "0%",
    bottom: "11.02%",
  },
  profileIcon: {
    bottom: 13,
    left: 0,
    width: 25,
    height: 25,
    position: "absolute",
  },
  property1variant2: {
    marginLeft: 20,
  },
  image8Icon: {
    top: "-0.76%",
    bottom: "11.78%",
  },
  smallGeneralMdia: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 664,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: Padding.p_xl,
    overflow: "hidden",
  },
});

export default SmallGeneralMdia;
