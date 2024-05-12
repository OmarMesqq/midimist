import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Perfil = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.perfil, styles.perfilFlexBox]}>
      <View style={[styles.frameParent, styles.perfilFlexBox]}>
        <View style={[styles.torreDeEnergia1Wrapper, styles.torreLayout]}>
          <Image
            style={[styles.torreDeEnergia1, styles.torreLayout]}
            contentFit="cover"
            source={require("../assets/torre-de-energia-1.png")}
          />
        </View>
        <View style={[styles.upperWrapper, styles.badgesSpaceBlock]}>
          <View style={[styles.upper, styles.upperFlexBox]}>
            <View style={styles.topUserWrapper}>
              <View style={[styles.topUser, styles.topUserFlexBox]}>
                <View style={[styles.nomeEFoto, styles.upperFlexBox]}>
                  <Image
                    style={styles.profileIcon}
                    contentFit="cover"
                    source={require("../assets/profile-icon5.png")}
                  />
                  <Text
                    style={[styles.abate11, styles.abate11FlexBox]}
                  >{`Abate_11
`}</Text>
                </View>
                <View
                  style={[
                    styles.memberSince042324Wrapper,
                    styles.topUserFlexBox,
                  ]}
                >
                  <Text
                    style={[
                      styles.memberSince042324Container,
                      styles.abate11FlexBox,
                    ]}
                  >
                    <Text style={styles.abate11Typo}>{`Member 
since
`}</Text>
                    <Text style={styles.text}>04/23/24</Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.badges, styles.badgesSpaceBlock]}>
          <Text style={[styles.badges1, styles.abate11FlexBox]}>Badges</Text>
          <View style={[styles.badges2, styles.upperFlexBox]}>
            <Image
              style={styles.starMedal1Icon}
              contentFit="cover"
              source={require("../assets/starmedal-1.png")}
            />
            <Image
              style={styles.starMedal1Icon}
              contentFit="cover"
              source={require("../assets/tickmark-1.png")}
            />
            <Image
              style={styles.starMedal1Icon}
              contentFit="cover"
              source={require("../assets/award-1.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.bottomNavBar, styles.topUserFlexBox]}>
        <Pressable
          style={styles.home31}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/home3-14.png")}
          />
        </Pressable>
        <Pressable
          style={styles.home31}
          onPress={() => navigation.navigate("Conversas")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/chat1-1.png")}
          />
        </Pressable>
        <Image
          style={styles.starMedal1Icon}
          contentFit="cover"
          source={require("../assets/plus1-1.png")}
        />
        <Pressable
          style={styles.home31}
          onPress={() => navigation.navigate("Pesquisa1")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/list1-1.png")}
          />
        </Pressable>
        <Pressable
          style={styles.home31}
          onPress={() => navigation.navigate("Pesquisa")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/loupe1-2.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  perfilFlexBox: {
    overflow: "hidden",
    flex: 1,
  },
  torreLayout: {
    maxHeight: 210,
    maxWidth: 344,
    minHeight: 210,
    minWidth: 344,
  },
  badgesSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xs,
    marginTop: 10,
  },
  upperFlexBox: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  topUserFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  abate11FlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
  },
  torreDeEnergia1: {
    width: 344,
    height: 210,
    borderRadius: Border.br_xl,
  },
  torreDeEnergia1Wrapper: {
    flexDirection: "row",
  },
  profileIcon: {
    width: 50,
    height: 50,
  },
  abate11: {
    marginLeft: 5,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
  },
  nomeEFoto: {
    flex: 1,
  },
  abate11Typo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  text: {
    fontFamily: FontFamily.interRegular,
  },
  memberSince042324Container: {
    fontSize: FontSize.size_smi,
  },
  memberSince042324Wrapper: {
    width: 58,
  },
  topUser: {
    flex: 1,
  },
  topUserWrapper: {
    flexDirection: "row",
    flex: 1,
  },
  upper: {
    width: 323,
    alignItems: "center",
  },
  upperWrapper: {
    justifyContent: "center",
    marginTop: 10,
    height: 50,
  },
  badges1: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
  },
  starMedal1Icon: {
    width: 32,
    height: 32,
  },
  badges2: {
    width: 96,
    marginTop: 10,
  },
  badges: {
    marginTop: 10,
  },
  frameParent: {
    alignSelf: "stretch",
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 4,
    zIndex: 0,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_xl,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  home31: {
    width: 24,
    height: 24,
  },
  bottomNavBar: {
    position: "absolute",
    marginLeft: -185,
    bottom: 0,
    left: "50%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    width: 370,
    height: 48,
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_xl,
    zIndex: 1,
    alignItems: "center",
    backgroundColor: Color.colorGray_100,
  },
  perfil: {
    backgroundColor: Color.colorBlack,
    height: 781,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_31xl,
    width: "100%",
  },
});

export default Perfil;
