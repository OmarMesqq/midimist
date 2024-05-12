import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, Padding, FontSize } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <View style={styles.risingReviews}>
        <Text style={[styles.header, styles.headerFlexBox]}>
          Popular Reviews
        </Text>
        <View style={[styles.reviews, styles.headerPosition]}>
          <LinearGradient
            style={[styles.review1, styles.review1Layout]}
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
                  source={require("../assets/profile-icon.png")}
                />
                <Text style={styles.username}>User</Text>
                <Text style={[styles.time, styles.timeTypo]}>1:53</Text>
              </View>
              <View style={styles.contentReviews}>
                <Text style={[styles.text, styles.timeTypo]}>
                  Um dos melhores animes de todos os tempos!
                </Text>
                <Image
                  style={styles.image7Icon}
                  contentFit="cover"
                  source={require("../assets/image-7.png")}
                />
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>
      <View style={[styles.tipoMdia, styles.mdiaLayout1]}>
        <Pressable
          style={styles.mdiaLayout}
          onPress={() => navigation.navigate("Generos")}
        >
          <Image
            style={[styles.image8Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/image-8.png")}
          />
          <Text style={[styles.filmes, styles.headerFlexBox]}>Filmes</Text>
        </Pressable>
        <Pressable
          style={[styles.mdia1, styles.mdiaLayout]}
          onPress={() => navigation.navigate("Generos")}
        >
          <Image
            style={[styles.image4Icon, styles.image4IconPosition]}
            contentFit="cover"
            source={require("../assets/image-4.png")}
          />
          <Text style={[styles.filmes, styles.headerFlexBox]}>Livros</Text>
        </Pressable>
        <Pressable
          style={[styles.mdia2, styles.mdiaLayout]}
          onPress={() => navigation.navigate("Generos")}
        >
          <Image
            style={[styles.image11Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/image-11.png")}
          />
          <Text style={[styles.filmes, styles.headerFlexBox]}>Séries</Text>
        </Pressable>
        <Pressable
          style={[styles.mdia2, styles.mdiaLayout]}
          onPress={() => navigation.navigate("Generos")}
        >
          <Image
            style={[styles.image4Icon1, styles.image4IconPosition]}
            contentFit="cover"
            source={require("../assets/image-41.png")}
          />
          <Text style={[styles.filmes, styles.headerFlexBox]}>Músicas</Text>
        </Pressable>
      </View>
      <Text style={[styles.header1, styles.headerFlexBox]}>For You</Text>
      <View style={[styles.boxDeMdia, styles.mdiaLayout1]}>
        <View style={styles.generalLayout}>
          <Image
            style={[styles.contextBuittonIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/context-buitton.png")}
          />
          <Text style={[styles.title1, styles.headerFlexBox]}>
            Evidências do Am...
          </Text>
          <Image
            style={[styles.image6Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-6.png")}
          />
        </View>
        <View style={[styles.generalMdia1, styles.generalLayout]}>
          <Image
            style={[styles.contextBuittonIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/context-buitton.png")}
          />
          <Text style={[styles.title1, styles.headerFlexBox]}>
            Kung Fu Panda 4
          </Text>
          <Image
            style={[styles.image6Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-10.png")}
          />
        </View>
        <View style={[styles.generalMdia1, styles.generalLayout]}>
          <Image
            style={[styles.contextBuittonIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/context-buitton.png")}
          />
          <Text style={[styles.title1, styles.headerFlexBox]}>
            Shrek The Third
          </Text>
          <Image
            style={[styles.image6Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-3.png")}
          />
        </View>
      </View>
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
            style={[styles.icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/logo-button.png")}
          />
        </Pressable>
        <View style={styles.bell11Parent}>
          <Image
            style={styles.bell11Icon}
            contentFit="cover"
            source={require("../assets/bell1-1.png")}
          />
          <Pressable
            style={[styles.profileIcon1, styles.logoButtonLayout]}
            onPress={() => navigation.navigate("Perfil")}
          >
            <Image
              style={styles.iconLayout1}
              contentFit="cover"
              source={require("../assets/profile-icon1.png")}
            />
          </Pressable>
        </View>
      </LinearGradient>
      <View style={[styles.bottomNavBar, styles.topFlexBox]}>
        <Image
          style={styles.home31Icon}
          contentFit="cover"
          source={require("../assets/home3-1.png")}
        />
        <Pressable
          style={styles.home31Icon}
          onPress={() => navigation.navigate("Conversas")}
        >
          <Image
            style={styles.iconLayout1}
            contentFit="cover"
            source={require("../assets/chat1-1.png")}
          />
        </Pressable>
        <Image
          style={styles.logoButtonLayout}
          contentFit="cover"
          source={require("../assets/plus1-1.png")}
        />
        <Pressable
          style={styles.home31Icon}
          onPress={() => navigation.navigate("Pesquisa1")}
        >
          <Image
            style={styles.iconLayout1}
            contentFit="cover"
            source={require("../assets/list1-1.png")}
          />
        </Pressable>
        <Pressable
          style={styles.home31Icon}
          onPress={() => navigation.navigate("Pesquisa")}
        >
          <Image
            style={styles.iconLayout1}
            contentFit="cover"
            source={require("../assets/loupe1-2.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
  },
  headerPosition: {
    left: 0,
    position: "absolute",
  },
  review1Layout: {
    borderRadius: Border.br_xl,
    backgroundColor: "transparent",
  },
  backgroundPosition: {
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  timeTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorWhite,
  },
  mdiaLayout1: {
    width: 344,
    marginTop: 10,
    flexDirection: "row",
  },
  iconPosition: {
    width: 119,
    left: 0,
    position: "absolute",
    zIndex: 0,
  },
  mdiaLayout: {
    maxHeight: 28,
    maxWidth: 119,
    paddingVertical: Padding.p_11xs,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    paddingHorizontal: Padding.p_11xl,
    justifyContent: "center",
    width: 119,
    alignItems: "center",
    borderRadius: Border.br_xl,
    flexDirection: "row",
  },
  image4IconPosition: {
    height: 134,
    width: 119,
    left: 0,
    position: "absolute",
    zIndex: 0,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    right: "0%",
    position: "absolute",
  },
  generalLayout: {
    height: 208,
    width: 141,
  },
  topFlexBox: {
    justifyContent: "space-between",
    left: "50%",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  logoButtonLayout: {
    height: 32,
    width: 32,
  },
  header: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    left: 0,
    position: "absolute",
    top: 0,
  },
  background: {
    left: "0%",
    bottom: "0%",
    backgroundColor: "transparent",
    borderRadius: Border.br_xl,
  },
  profileIcon: {
    width: 34,
    height: 34,
  },
  username: {
    display: "flex",
    width: 164,
    marginLeft: 10,
    alignItems: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
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
    width: 100,
    height: 131,
    borderRadius: Border.br_3xs,
    marginLeft: 10,
  },
  contentReviews: {
    marginLeft: 10,
    flexDirection: "row",
  },
  foreground: {
    flexWrap: "wrap",
    padding: Padding.p_3xs,
    left: "0%",
    bottom: "0%",
    flexDirection: "row",
  },
  review1: {
    width: 264,
    height: 185,
    backgroundColor: "transparent",
  },
  reviews: {
    top: 33,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    flexDirection: "row",
  },
  risingReviews: {
    alignSelf: "stretch",
    height: 218,
    zIndex: 0,
  },
  image8Icon: {
    height: 28,
    top: 0,
  },
  filmes: {
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    zIndex: 1,
    marginLeft: 10,
    fontSize: FontSize.size_xl,
  },
  image4Icon: {
    top: -71,
  },
  mdia1: {
    marginLeft: 10,
  },
  image11Icon: {
    top: -79,
    height: 159,
  },
  mdia2: {
    backgroundColor: Color.colorGainsboro,
    marginLeft: 10,
  },
  image4Icon1: {
    top: -53,
  },
  tipoMdia: {
    marginTop: 10,
    zIndex: 1,
  },
  header1: {
    zIndex: 2,
    marginTop: 10,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
  },
  contextBuittonIcon: {
    height: "7.69%",
    width: "11.35%",
    left: "88.65%",
    top: "92.31%",
    bottom: "0%",
  },
  title1: {
    fontSize: FontSize.size_smi,
    top: "92.31%",
    left: "0%",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorWhite,
    position: "absolute",
  },
  image6Icon: {
    height: "88.94%",
    bottom: "11.06%",
    borderRadius: Border.br_3xs,
    left: "0%",
    top: "0%",
    maxWidth: "100%",
    width: "100%",
  },
  generalMdia1: {
    display: "none",
    marginLeft: 10,
  },
  boxDeMdia: {
    zIndex: 3,
    marginTop: 10,
  },
  icon: {
    maxWidth: 32,
    maxHeight: 32,
  },
  bell11Icon: {
    width: 16,
    height: 16,
  },
  profileIcon1: {
    marginLeft: 6,
  },
  bell11Parent: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  top: {
    marginLeft: -180,
    top: 10,
    width: 360,
    height: 40,
    paddingLeft: Padding.p_8xs,
    paddingRight: Padding.p_3xs,
    zIndex: 4,
    backgroundColor: "transparent",
  },
  home31Icon: {
    width: 24,
    height: 24,
  },
  bottomNavBar: {
    marginLeft: -185,
    bottom: 0,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    backgroundColor: Color.colorGray_100,
    width: 370,
    height: 48,
    paddingVertical: Padding.p_xl,
    zIndex: 5,
    paddingHorizontal: Padding.p_11xl,
    justifyContent: "space-between",
    left: "50%",
  },
  home: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    height: 1379,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_31xl,
    width: "100%",
  },
});

export default Home;
