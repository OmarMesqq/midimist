import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Pesquisa = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.pesquisa, styles.pesquisaFlexBox]}>
      <View style={styles.mediumGeneralMdia}>
        <Image
          style={[styles.contextBuittonIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/context-buitton6.png")}
        />
        <Text style={[styles.title1, styles.title1FlexBox]}>
          KonoSuba: God's...
        </Text>
        <Image
          style={[styles.anime1Icon, styles.title1Position]}
          contentFit="cover"
          source={require("../assets/anime-15.png")}
        />
      </View>
      <LinearGradient
        style={[styles.top, styles.topFlexBox]}
        locations={[0, 1]}
        colors={["#000", "rgba(0, 0, 0, 0)"]}
      >
        <Pressable
          style={styles.iconLayout1}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
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
            style={[styles.profileIcon, styles.iconLayout1]}
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
      <View style={[styles.bottomNavBar, styles.bottomLayout]}>
        <Pressable
          style={[styles.home31, styles.loupe12IconLayout]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/home3-15.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.chat11, styles.loupe12IconLayout]}
          onPress={() => navigation.navigate("Conversas")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/chat1-1.png")}
          />
        </Pressable>
        <Image
          style={[styles.plus11Icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/plus1-1.png")}
        />
        <Pressable
          style={[styles.list11, styles.loupe12IconLayout]}
          onPress={() => navigation.navigate("Pesquisa1")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/list1-1.png")}
          />
        </Pressable>
        <Image
          style={[styles.loupe12Icon, styles.loupe12IconLayout]}
          contentFit="cover"
          source={require("../assets/loupe1-25.png")}
        />
        <View style={[styles.bottomNavBarInner, styles.loupe12ParentFlexBox]}>
          <View style={[styles.loupe12Parent, styles.loupe12ParentFlexBox]}>
            <Image
              style={styles.loupe12IconLayout}
              contentFit="cover"
              source={require("../assets/loupe1-2.png")}
            />
            <Text style={[styles.search, styles.title1FlexBox]}>search</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pesquisaFlexBox: {
    alignItems: "center",
    flex: 1,
  },
  iconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    overflow: "hidden",
  },
  title1FlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
  },
  title1Position: {
    left: "0%",
    position: "absolute",
  },
  topFlexBox: {
    justifyContent: "space-between",
    left: "50%",
    flexDirection: "row",
    alignItems: "center",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  iconLayout1: {
    height: 32,
    width: 32,
  },
  bottomLayout: {
    width: 370,
    position: "absolute",
  },
  loupe12IconLayout: {
    height: 24,
    width: 24,
  },
  loupe12ParentFlexBox: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  contextBuittonIcon: {
    width: "11.36%",
    bottom: "0%",
    left: "88.64%",
    top: "92.3%",
    height: "7.7%",
    position: "absolute",
  },
  title1: {
    width: "85.09%",
    fontSize: FontSize.size_3xs,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    left: "0%",
    position: "absolute",
    top: "92.3%",
    height: "7.7%",
  },
  anime1Icon: {
    height: "88.91%",
    top: "0%",
    bottom: "11.09%",
    borderRadius: Border.br_3xs,
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    overflow: "hidden",
    width: "100%",
    left: "0%",
  },
  mediumGeneralMdia: {
    width: 110,
    height: 162,
    zIndex: 0,
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
    flexDirection: "row",
    alignItems: "center",
  },
  top: {
    marginLeft: -180,
    top: 10,
    width: 360,
    height: 40,
    paddingLeft: Padding.p_8xs,
    paddingRight: Padding.p_3xs,
    backgroundColor: "transparent",
    zIndex: 1,
    position: "absolute",
  },
  home31: {
    zIndex: 0,
  },
  chat11: {
    zIndex: 1,
  },
  plus11Icon: {
    zIndex: 2,
  },
  list11: {
    zIndex: 3,
  },
  loupe12Icon: {
    zIndex: 4,
  },
  search: {
    fontSize: FontSize.size_mini,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    marginLeft: 10,
  },
  loupe12Parent: {
    backgroundColor: Color.colorDimgray,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_9xs,
    borderRadius: Border.br_3xs,
    alignItems: "center",
    flex: 1,
    flexWrap: "wrap",
  },
  bottomNavBarInner: {
    top: -48,
    left: 0,
    height: 57,
    alignItems: "flex-end",
    padding: Padding.p_3xs,
    zIndex: 5,
    width: 370,
    position: "absolute",
    justifyContent: "center",
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
    height: 48,
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_xl,
    zIndex: 2,
    justifyContent: "space-between",
    left: "50%",
    flexDirection: "row",
    alignItems: "center",
  },
  pesquisa: {
    backgroundColor: Color.colorBlack,
    height: 785,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_31xl,
    overflow: "hidden",
    alignItems: "center",
    width: "100%",
    flex: 1,
  },
});

export default Pesquisa;
