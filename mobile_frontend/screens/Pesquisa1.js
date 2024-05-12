import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Pesquisa1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pesquisa}>
      <View style={[styles.myListHeader, styles.listParentFlexBox]}>
        <View style={[styles.myListWithButton, styles.listParentFlexBox]}>
          <View style={styles.myListMovies}>
            <Text style={[styles.myListMovies1, styles.searchFlexBox]}>
              My List: Movies
            </Text>
          </View>
          <Image
            style={styles.dropdownButtonIcon}
            contentFit="cover"
            source={require("../assets/dropdown-button.png")}
          />
        </View>
        <View style={styles.toggleButton}>
          <View style={styles.toggleButtonChild} />
          <Image
            style={styles.toggleButtonItem}
            contentFit="cover"
            source={require("../assets/ellipse-21.png")}
          />
          <Image
            style={[styles.list13Icon, styles.iconLayout3]}
            contentFit="cover"
            source={require("../assets/list1-32.png")}
          />
          <Image
            style={[styles.squares1Icon, styles.iconLayout3]}
            contentFit="cover"
            source={require("../assets/squares-12.png")}
          />
        </View>
      </View>
      <View style={styles.myListBoxes}>
        <View style={styles.mediumLayout}>
          <Image
            style={styles.contextBuittonIcon}
            contentFit="cover"
            source={require("../assets/context-buitton6.png")}
          />
          <Text style={[styles.title1, styles.titleTypo]}>Dune</Text>
          <Image
            style={[styles.image7Icon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/image-76.png")}
          />
        </View>
        <View style={[styles.mediumGeneralMdia1, styles.mediumLayout]}>
          <Image
            style={styles.contextBuittonIcon}
            contentFit="cover"
            source={require("../assets/context-buitton6.png")}
          />
          <Text style={[styles.title11, styles.titleTypo]}>
            Evidências do Am...
          </Text>
          <Image
            style={[styles.image7Icon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/image-64.png")}
          />
        </View>
        <View style={[styles.mediumGeneralMdia1, styles.mediumLayout]}>
          <Image
            style={styles.contextBuittonIcon}
            contentFit="cover"
            source={require("../assets/context-buitton6.png")}
          />
          <Text style={[styles.title12, styles.titleTypo]}>Guerra Civil</Text>
          <Image
            style={[styles.image8Icon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/image-84.png")}
          />
        </View>
        <View style={[styles.mediumGeneralMdia1, styles.mediumLayout]}>
          <Image
            style={styles.contextBuittonIcon}
            contentFit="cover"
            source={require("../assets/context-buitton7.png")}
          />
          <Text style={[styles.title13, styles.titleTypo]}>
            Kong: Skull Island
          </Text>
          <Image
            style={[styles.image8Icon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/image-94.png")}
          />
        </View>
        <View style={[styles.mediumGeneralMdia1, styles.mediumLayout]}>
          <Image
            style={styles.contextBuittonIcon}
            contentFit="cover"
            source={require("../assets/context-buitton7.png")}
          />
          <Text style={[styles.title14, styles.titleTypo]}>
            Kung Fu Panda 4
          </Text>
          <Image
            style={[styles.image7Icon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/image-104.png")}
          />
        </View>
        <View style={[styles.mediumGeneralMdia1, styles.mediumLayout]}>
          <Image
            style={styles.contextBuittonIcon}
            contentFit="cover"
            source={require("../assets/context-buitton7.png")}
          />
          <Text style={[styles.title15, styles.titleTypo]}>Shrek 2</Text>
          <Image
            style={[styles.image7Icon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/image-23.png")}
          />
        </View>
        <View style={[styles.mediumGeneralMdia1, styles.mediumLayout]}>
          <Image
            style={styles.contextBuittonIcon}
            contentFit="cover"
            source={require("../assets/context-buitton8.png")}
          />
          <Text style={[styles.title16, styles.titleTypo]}>
            Shrek The Third
          </Text>
          <Image
            style={[styles.image7Icon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/image-35.png")}
          />
        </View>
        <View style={[styles.mediumGeneralMdia1, styles.mediumLayout]}>
          <Image
            style={styles.contextBuittonIcon}
            contentFit="cover"
            source={require("../assets/context-buitton8.png")}
          />
          <Text style={[styles.title17, styles.titleTypo]}>
            KonoSuba: God's...
          </Text>
          <Image
            style={[styles.image7Icon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/anime-16.png")}
          />
        </View>
        <View style={[styles.mediumGeneralMdia1, styles.mediumLayout]}>
          <Image
            style={styles.contextBuittonIcon}
            contentFit="cover"
            source={require("../assets/context-buitton8.png")}
          />
          <Text style={[styles.title17, styles.titleTypo]}>
            Demon Slayer: Ki...
          </Text>
          <Image
            style={[styles.image7Icon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/anime-24.png")}
          />
        </View>
        <View style={[styles.mediumGeneralMdia1, styles.mediumLayout]}>
          <Image
            style={styles.contextBuittonIcon}
            contentFit="cover"
            source={require("../assets/context-buitton9.png")}
          />
          <Text style={[styles.title17, styles.titleTypo]}>
            That Time I Got R...
          </Text>
          <Image
            style={[styles.image7Icon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/anime-34.png")}
          />
        </View>
        <View style={[styles.mediumGeneralMdia1, styles.mediumLayout]}>
          <Image
            style={styles.contextBuittonIcon}
            contentFit="cover"
            source={require("../assets/context-buitton9.png")}
          />
          <Text style={[styles.title17, styles.titleTypo]}>
            KonoSuba: God's...
          </Text>
          <Image
            style={[styles.image7Icon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/anime-17.png")}
          />
        </View>
        <View style={[styles.mediumGeneralMdia1, styles.mediumLayout]}>
          <Image
            style={styles.contextBuittonIcon}
            contentFit="cover"
            source={require("../assets/context-buitton9.png")}
          />
          <Text style={[styles.title17, styles.titleTypo]}>
            KonoSuba: God's...
          </Text>
          <Image
            style={[styles.image7Icon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/anime-17.png")}
          />
        </View>
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
            style={[styles.icon, styles.iconLayout4]}
            contentFit="cover"
            source={require("../assets/logo-button.png")}
          />
        </Pressable>
        <View style={[styles.bell11Parent, styles.listParentFlexBox]}>
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
              style={styles.iconLayout4}
              contentFit="cover"
              source={require("../assets/profile-icon1.png")}
            />
          </Pressable>
        </View>
      </LinearGradient>
      <View style={[styles.bottomNavBar, styles.bottomLayout]}>
        <Pressable
          style={[styles.home31, styles.iconLayout]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.iconLayout4}
            contentFit="cover"
            source={require("../assets/home3-15.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.chat11, styles.iconLayout]}
          onPress={() => navigation.navigate("Conversas")}
        >
          <Image
            style={styles.iconLayout4}
            contentFit="cover"
            source={require("../assets/chat1-1.png")}
          />
        </Pressable>
        <Image
          style={[styles.plus11Icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/plus1-1.png")}
        />
        <Image
          style={[styles.list11Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/list1-14.png")}
        />
        <Pressable
          style={[styles.loupe12, styles.iconLayout]}
          onPress={() => navigation.navigate("Pesquisa")}
        >
          <Image
            style={styles.iconLayout4}
            contentFit="cover"
            source={require("../assets/loupe1-24.png")}
          />
        </Pressable>
        <View style={[styles.bottomNavBarInner, styles.bottomLayout]}>
          <View style={[styles.loupe12Parent, styles.listParentFlexBox]}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/loupe1-2.png")}
            />
            <Text style={[styles.search, styles.searchFlexBox]}>search</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  searchFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
  },
  iconLayout3: {
    bottom: "14.29%",
    top: "14.29%",
    width: "32.79%",
    height: "71.43%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  titleTypo: {
    fontSize: FontSize.size_3xs,
    top: "92.3%",
    height: "7.7%",
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: "0%",
    position: "absolute",
  },
  iconLayout2: {
    height: "88.91%",
    borderRadius: Border.br_3xs,
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  mediumLayout: {
    height: 162,
    width: 110,
  },
  topFlexBox: {
    justifyContent: "space-between",
    left: "50%",
    alignItems: "center",
  },
  iconLayout4: {
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
    flexDirection: "row",
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
  myListMovies1: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: "0%",
    color: Color.colorWhite,
    top: "0%",
    position: "absolute",
  },
  myListMovies: {
    width: 152,
    height: 24,
  },
  dropdownButtonIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  myListWithButton: {
    flex: 1,
    alignItems: "center",
  },
  toggleButtonChild: {
    borderRadius: Border.br_8xl,
    backgroundColor: Color.colorGainsboro,
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  toggleButtonItem: {
    height: "85.71%",
    width: "39.34%",
    top: "7.14%",
    right: "54.1%",
    bottom: "7.14%",
    left: "6.56%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  list13Icon: {
    right: "14.75%",
    left: "52.46%",
  },
  squares1Icon: {
    right: "57.38%",
    left: "9.84%",
  },
  toggleButton: {
    width: 61,
    height: 28,
    marginLeft: 5,
  },
  myListHeader: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
    zIndex: 0,
    alignSelf: "stretch",
    alignItems: "center",
  },
  contextBuittonIcon: {
    width: "11.36%",
    left: "88.64%",
    top: "92.3%",
    height: "7.7%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  title1: {
    width: "24.09%",
  },
  image7Icon: {
    bottom: "11.09%",
    borderRadius: Border.br_3xs,
    top: "0%",
    height: "88.91%",
  },
  title11: {
    width: "88.64%",
  },
  mediumGeneralMdia1: {
    marginLeft: 7,
  },
  title12: {
    width: "53.18%",
  },
  image8Icon: {
    top: "-0.74%",
    bottom: "11.83%",
    borderRadius: Border.br_3xs,
  },
  title13: {
    width: "80.18%",
  },
  title14: {
    width: "75.18%",
  },
  title15: {
    width: "34.73%",
  },
  title16: {
    width: "72.36%",
  },
  title17: {
    width: "85.09%",
  },
  myListBoxes: {
    height: 637,
    marginTop: 10,
    zIndex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    alignSelf: "stretch",
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
  },
  top: {
    marginLeft: -180,
    top: 10,
    width: 360,
    height: 40,
    paddingLeft: Padding.p_8xs,
    paddingRight: Padding.p_3xs,
    backgroundColor: "transparent",
    zIndex: 2,
    position: "absolute",
    justifyContent: "space-between",
    left: "50%",
    flexDirection: "row",
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
  list11Icon: {
    zIndex: 3,
  },
  loupe12: {
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
    flexWrap: "wrap",
    flex: 1,
    alignItems: "center",
  },
  bottomNavBarInner: {
    top: -48,
    left: 0,
    height: 57,
    alignItems: "flex-end",
    padding: Padding.p_3xs,
    zIndex: 5,
    justifyContent: "center",
    flexWrap: "wrap",
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
    zIndex: 3,
    justifyContent: "space-between",
    left: "50%",
    alignItems: "center",
  },
  pesquisa: {
    backgroundColor: Color.colorBlack,
    height: 785,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_31xl,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Pesquisa1;
