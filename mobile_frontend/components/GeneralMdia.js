import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const GeneralMdia = () => {
  return (
    <View style={styles.generalMdia}>
      <View style={styles.property1defaultLayout}>
        <Image
          style={styles.contextBuittonIcon}
          contentFit="cover"
          source={require("../assets/context-buitton1.png")}
        />
        <Text style={styles.title1}>KonoSuba: God's...</Text>
        <Image
          style={[styles.anime1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/anime-1.png")}
        />
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <Image
          style={styles.contextBuittonIcon}
          contentFit="cover"
          source={require("../assets/context-buitton1.png")}
        />
        <Text style={styles.title1}>Demon Slayer: Ki...</Text>
        <Image
          style={[styles.anime1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/anime-2.png")}
        />
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <Image
          style={styles.contextBuittonIcon}
          contentFit="cover"
          source={require("../assets/context-buitton1.png")}
        />
        <Text style={styles.title1}>That Time I Got R...</Text>
        <Image
          style={[styles.anime1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/anime-3.png")}
        />
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <Image
          style={styles.contextBuittonIcon}
          contentFit="cover"
          source={require("../assets/context-buitton1.png")}
        />
        <Text style={styles.title1}>Enshrouded</Text>
        <Image
          style={[styles.anime1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/game-1.png")}
        />
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <Image
          style={styles.contextBuittonIcon}
          contentFit="cover"
          source={require("../assets/context-buitton1.png")}
        />
        <Text style={styles.title1}>Valheim</Text>
        <Image
          style={[styles.anime1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/game-2.png")}
        />
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <Image
          style={styles.contextBuittonIcon}
          contentFit="cover"
          source={require("../assets/context-buitton1.png")}
        />
        <Text style={styles.title1}>Monster Hunter R...</Text>
        <Image
          style={[styles.anime1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/game-3.png")}
        />
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <Image
          style={styles.contextBuittonIcon}
          contentFit="cover"
          source={require("../assets/context-buitton1.png")}
        />
        <Text style={styles.title1}>Dune</Text>
        <Image
          style={[styles.anime1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-73.png")}
        />
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <Image
          style={styles.contextBuittonIcon}
          contentFit="cover"
          source={require("../assets/context-buitton1.png")}
        />
        <Text style={styles.title1}>Evidências do Am...</Text>
        <Image
          style={[styles.anime1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-61.png")}
        />
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <Image
          style={styles.contextBuittonIcon}
          contentFit="cover"
          source={require("../assets/context-buitton1.png")}
        />
        <Text style={styles.title1}>Guerra Civil</Text>
        <Image
          style={[styles.image8Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-81.png")}
        />
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <Image
          style={styles.contextBuittonIcon}
          contentFit="cover"
          source={require("../assets/context-buitton1.png")}
        />
        <Text style={styles.title1}>Kong: Skull Island</Text>
        <Image
          style={[styles.image8Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-9.png")}
        />
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <Image
          style={styles.contextBuittonIcon}
          contentFit="cover"
          source={require("../assets/context-buitton1.png")}
        />
        <Text style={styles.title1}>Kung Fu Panda 4</Text>
        <Image
          style={[styles.anime1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-101.png")}
        />
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <Image
          style={styles.contextBuittonIcon}
          contentFit="cover"
          source={require("../assets/context-buitton1.png")}
        />
        <Text style={styles.title1}>Shrek 2</Text>
        <Image
          style={[styles.anime1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-2.png")}
        />
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <Image
          style={styles.contextBuittonIcon}
          contentFit="cover"
          source={require("../assets/context-buitton1.png")}
        />
        <Text style={styles.title1}>Shrek The Third</Text>
        <Image
          style={[styles.anime1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-31.png")}
        />
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <Image
          style={styles.contextBuittonIcon}
          contentFit="cover"
          source={require("../assets/context-buitton1.png")}
        />
        <Text style={styles.title1}>Six Of Crows</Text>
        <Image
          style={[styles.anime1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-42.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    borderRadius: Border.br_3xs,
    width: "100%",
    height: "88.94%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  property1defaultLayout: {
    height: 208,
    width: 141,
  },
  contextBuittonIcon: {
    height: "7.69%",
    width: "11.35%",
    bottom: "0%",
    left: "88.65%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    top: "92.31%",
    position: "absolute",
    overflow: "hidden",
  },
  title1: {
    fontSize: FontSize.size_smi,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    textAlign: "left",
    left: "0%",
    top: "92.31%",
    position: "absolute",
  },
  anime1Icon: {
    top: "0%",
    bottom: "11.06%",
  },
  property1variant2: {
    marginLeft: 20,
  },
  image8Icon: {
    top: "-0.72%",
    bottom: "11.78%",
  },
  generalMdia: {
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

export default GeneralMdia;
