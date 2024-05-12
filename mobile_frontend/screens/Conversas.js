import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const Conversas = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.conversas}>
      <View style={styles.consumidosRecentementeDeAmi}>
        <View style={styles.feedParent}>
          <Text style={[styles.feed, styles.feedTypo]}>Feed</Text>
          <View style={[styles.addFriendWrapper, styles.parentFlexBox]}>
            <Text style={[styles.addFriend, styles.feedTypo]}>
              Add Friend +
            </Text>
          </View>
        </View>
        <View style={styles.smallGeneralMdiaParent}>
          <View style={styles.smallLayout}>
            <Image
              style={[styles.game2Icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/game-23.png")}
            />
            <Image
              style={styles.profileIcon}
              contentFit="cover"
              source={require("../assets/profile-icon6.png")}
            />
          </View>
          <View style={[styles.smallGeneralMdia1, styles.smallLayout]}>
            <Image
              style={[styles.game2Icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/image-34.png")}
            />
            <Image
              style={styles.profileIcon}
              contentFit="cover"
              source={require("../assets/profile-icon7.png")}
            />
          </View>
          <View style={[styles.smallGeneralMdia1, styles.smallLayout]}>
            <Image
              style={[styles.image9Icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/image-93.png")}
            />
            <Image
              style={styles.profileIcon}
              contentFit="cover"
              source={require("../assets/profile-icon8.png")}
            />
          </View>
          <View style={[styles.smallGeneralMdia1, styles.smallLayout]}>
            <Image
              style={[styles.game2Icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/anime-14.png")}
            />
            <Image
              style={styles.profileIcon}
              contentFit="cover"
              source={require("../assets/profile-icon6.png")}
            />
          </View>
          <View style={[styles.smallGeneralMdia1, styles.smallLayout]}>
            <Image
              style={[styles.game2Icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/anime-23.png")}
            />
            <Image
              style={styles.profileIcon}
              contentFit="cover"
              source={require("../assets/profile-icon6.png")}
            />
          </View>
          <View style={[styles.smallGeneralMdia1, styles.smallLayout]}>
            <Image
              style={[styles.game2Icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/anime-33.png")}
            />
            <Image
              style={styles.profileIcon}
              contentFit="cover"
              source={require("../assets/profile-icon6.png")}
            />
          </View>
          <View style={[styles.smallGeneralMdia1, styles.smallLayout]}>
            <Image
              style={[styles.game2Icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/game-13.png")}
            />
            <Image
              style={styles.profileIcon}
              contentFit="cover"
              source={require("../assets/profile-icon6.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.chatsParent, styles.parentFlexBox]}>
        <Text style={[styles.feed, styles.feedTypo]}>Chats</Text>
        <View style={[styles.addFriendWrapper, styles.parentFlexBox]}>
          <Text style={[styles.addFriend, styles.feedTypo]}>Create Chat +</Text>
        </View>
      </View>
      <View style={styles.mensagens}>
        <View style={styles.profileIconParent}>
          <Image
            style={styles.profileIcon7}
            contentFit="cover"
            source={require("../assets/profile-icon9.png")}
          />
          <View style={styles.nomeParent}>
            <Text style={styles.nome}>Nome</Text>
            <Text style={[styles.ultimaMensagem, styles.tempoTypo]}>
              Ultima mensagem - tempo
            </Text>
          </View>
          <Text style={[styles.tempo, styles.tempoTypo]}>Tempo</Text>
        </View>
        <View style={[styles.groupImageParent, styles.groupSpaceBlock]}>
          <Image
            style={styles.groupImageIcon}
            contentFit="cover"
            source={require("../assets/group-image1.png")}
          />
          <View style={styles.nomeParent}>
            <Text style={styles.nome}>Nome</Text>
            <Text style={[styles.ultimaMensagem, styles.tempoTypo]}>
              Ultima mensagem - tempo
            </Text>
          </View>
          <Text style={[styles.tempo, styles.tempoTypo]}>Tempo</Text>
        </View>
        <View style={[styles.profileIconGroup, styles.groupSpaceBlock]}>
          <Image
            style={styles.profileIcon7}
            contentFit="cover"
            source={require("../assets/profile-icon9.png")}
          />
          <View style={styles.nomeParent}>
            <Text style={styles.nome}>Nome</Text>
            <Text style={[styles.ultimaMensagem, styles.tempoTypo]}>
              Ultima mensagem - tempo
            </Text>
          </View>
          <Text style={[styles.tempo, styles.tempoTypo]}>Tempo</Text>
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
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/logo-button.png")}
          />
        </Pressable>
        <View style={[styles.bell11Parent, styles.parentFlexBox]}>
          <Image
            style={styles.bell11Icon}
            contentFit="cover"
            source={require("../assets/bell1-1.png")}
          />
          <Pressable
            style={[styles.profileIcon9, styles.logoButtonLayout]}
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
      <View style={[styles.bottomNavBar, styles.topFlexBox]}>
        <Pressable
          style={styles.home31}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/home3-15.png")}
          />
        </Pressable>
        <Image
          style={styles.home31}
          contentFit="cover"
          source={require("../assets/chat1-13.png")}
        />
        <Image
          style={styles.logoButtonLayout}
          contentFit="cover"
          source={require("../assets/plus1-1.png")}
        />
        <Pressable
          style={styles.home31}
          onPress={() => navigation.navigate("Pesquisa1")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/list1-1.png")}
          />
        </Pressable>
        <Pressable
          style={styles.home31}
          onPress={() => navigation.navigate("Pesquisa")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/loupe1-2.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  feedTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    height: "88.98%",
    position: "absolute",
    borderRadius: Border.br_3xs,
    overflow: "hidden",
    width: "100%",
  },
  smallLayout: {
    height: 118,
    width: 80,
  },
  tempoTypo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorWhite,
  },
  groupSpaceBlock: {
    marginTop: 5,
    padding: Padding.p_3xs,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
  },
  topFlexBox: {
    justifyContent: "space-between",
    left: "50%",
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  logoButtonLayout: {
    height: 32,
    width: 32,
  },
  feed: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    flex: 1,
  },
  addFriend: {
    fontSize: FontSize.size_xs,
  },
  addFriendWrapper: {
    backgroundColor: Color.colorDarkslategray,
    padding: Padding.p_8xs,
    marginLeft: 10,
    borderRadius: Border.br_3xs,
    alignItems: "center",
  },
  feedParent: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  game2Icon: {
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
  smallGeneralMdia1: {
    marginLeft: 10,
  },
  image9Icon: {
    top: "-0.76%",
    bottom: "11.78%",
  },
  smallGeneralMdiaParent: {
    marginTop: 10,
    width: 344,
    flexDirection: "row",
  },
  consumidosRecentementeDeAmi: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
    zIndex: 0,
    alignSelf: "stretch",
  },
  chatsParent: {
    zIndex: 1,
    marginTop: 10,
    alignSelf: "stretch",
  },
  profileIcon7: {
    width: 50,
    height: 50,
  },
  nome: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
  },
  ultimaMensagem: {
    marginTop: 10,
  },
  nomeParent: {
    height: 28,
    marginLeft: 10,
    flex: 1,
  },
  tempo: {
    marginLeft: 10,
  },
  profileIconParent: {
    padding: Padding.p_3xs,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  groupImageIcon: {
    width: 48,
    height: 48,
  },
  groupImageParent: {
    alignSelf: "stretch",
  },
  profileIconGroup: {
    width: 344,
  },
  mensagens: {
    zIndex: 2,
    marginTop: 10,
    alignSelf: "stretch",
    flex: 1,
  },
  icon: {
    maxWidth: 32,
    maxHeight: 32,
  },
  bell11Icon: {
    width: 16,
    height: 16,
  },
  profileIcon9: {
    marginLeft: 6,
  },
  bell11Parent: {
    justifyContent: "center",
  },
  top: {
    marginLeft: -180,
    top: 10,
    width: 360,
    height: 40,
    paddingLeft: Padding.p_8xs,
    paddingRight: Padding.p_3xs,
    backgroundColor: "transparent",
    zIndex: 3,
  },
  home31: {
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
    width: 370,
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_xl,
    zIndex: 4,
    height: 48,
    backgroundColor: Color.colorGray_100,
    justifyContent: "space-between",
    left: "50%",
  },
  conversas: {
    backgroundColor: Color.colorBlack,
    height: 1038,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_31xl,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Conversas;
