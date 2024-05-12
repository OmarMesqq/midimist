import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Generos = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.generos}>
      <View style={styles.generosDeMdia}>
        <View style={[styles.header, styles.headerPosition]}>
          <Text style={[styles.header1, styles.searchFlexBox]}>
            Generos de Livros
          </Text>
        </View>
      </View>
      <View style={[styles.generosDeMdia1, styles.generosFlexBox]}>
        <View style={[styles.generosDeMdia2, styles.generosDeMdia2FlexBox]}>
          <View style={styles.mdiaLayout}>
            <Image
              style={[styles.image1Icon, styles.image1IconPosition]}
              contentFit="cover"
              source={require("../assets/image-121.png")}
            />
            <View
              style={[styles.mdiaGenricaChild, styles.image1IconPosition]}
            />
            <Text style={[styles.ao, styles.generosFlexBox]}>Ação</Text>
          </View>
          <View style={[styles.mdiaGenrica1, styles.mdiaLayout]}>
            <Image
              style={[styles.image1Icon, styles.image1IconPosition]}
              contentFit="cover"
              source={require("../assets/image-122.png")}
            />
            <View
              style={[styles.mdiaGenricaChild, styles.image1IconPosition]}
            />
            <Text style={[styles.ao, styles.generosFlexBox]}>Shounen</Text>
          </View>
          <View style={[styles.mdiaGenrica1, styles.mdiaLayout]}>
            <Image
              style={[styles.image1Icon, styles.image1IconPosition]}
              contentFit="cover"
              source={require("../assets/image-123.png")}
            />
            <View
              style={[styles.mdiaGenricaChild, styles.image1IconPosition]}
            />
            <Text style={[styles.ao, styles.generosFlexBox]}>Ficção</Text>
          </View>
          <View style={[styles.mdiaGenrica1, styles.mdiaLayout]}>
            <Image
              style={[styles.image1Icon, styles.image1IconPosition]}
              contentFit="cover"
              source={require("../assets/image-124.png")}
            />
            <View
              style={[styles.mdiaGenricaChild, styles.image1IconPosition]}
            />
            <Text style={[styles.ao, styles.generosFlexBox]}>Comédia</Text>
          </View>
          <View style={[styles.mdiaGenrica1, styles.mdiaLayout]}>
            <Image
              style={[styles.image1Icon, styles.image1IconPosition]}
              contentFit="cover"
              source={require("../assets/image-125.png")}
            />
            <View
              style={[styles.mdiaGenricaChild, styles.image1IconPosition]}
            />
            <Text style={[styles.ao, styles.generosFlexBox]}>Drama</Text>
          </View>
          <View style={[styles.mdiaGenrica1, styles.mdiaLayout]}>
            <Image
              style={[styles.image1Icon, styles.image1IconPosition]}
              contentFit="cover"
              source={require("../assets/image-126.png")}
            />
            <View
              style={[styles.mdiaGenricaChild, styles.image1IconPosition]}
            />
            <Text style={[styles.ao, styles.generosFlexBox]}>Fantasia</Text>
          </View>
          <View style={[styles.mdiaGenrica1, styles.mdiaLayout]}>
            <Image
              style={[styles.image1Icon, styles.image1IconPosition]}
              contentFit="cover"
              source={require("../assets/image-127.png")}
            />
            <View
              style={[styles.mdiaGenricaChild, styles.image1IconPosition]}
            />
            <Text style={[styles.ao, styles.generosFlexBox]}>Shoujo</Text>
          </View>
          <View style={[styles.mdiaGenrica1, styles.mdiaLayout]}>
            <Image
              style={[styles.image1Icon, styles.image1IconPosition]}
              contentFit="cover"
              source={require("../assets/image-128.png")}
            />
            <View
              style={[styles.mdiaGenricaChild, styles.image1IconPosition]}
            />
            <Text style={[styles.ao, styles.generosFlexBox]}>
              Slice Of Life
            </Text>
          </View>
          <View style={[styles.mdiaGenrica1, styles.mdiaLayout]}>
            <Image
              style={[styles.image1Icon, styles.image1IconPosition]}
              contentFit="cover"
              source={require("../assets/image-129.png")}
            />
            <View
              style={[styles.mdiaGenricaChild, styles.image1IconPosition]}
            />
            <Text style={[styles.ao, styles.generosFlexBox]}>Sports</Text>
          </View>
          <View style={[styles.mdiaGenrica1, styles.mdiaLayout]}>
            <Image
              style={[styles.image1Icon, styles.image1IconPosition]}
              contentFit="cover"
              source={require("../assets/image-130.png")}
            />
            <View
              style={[styles.mdiaGenricaChild, styles.image1IconPosition]}
            />
            <Text style={[styles.ao, styles.generosFlexBox]}>Sobrenatural</Text>
          </View>
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
            style={[styles.icon, styles.iconLayout2]}
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
              style={[styles.icon1, styles.iconLayout2]}
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
            style={[styles.icon1, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/home3-15.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.chat11, styles.iconLayout]}
          onPress={() => navigation.navigate("Conversas")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout2]}
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
            style={[styles.icon1, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/loupe1-24.png")}
          />
        </Pressable>
        <View style={[styles.bottomNavBarInner, styles.bottomLayout]}>
          <View style={styles.loupe12Parent}>
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
  headerPosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  searchFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
  },
  generosFlexBox: {
    alignSelf: "stretch",
    flex: 1,
  },
  generosDeMdia2FlexBox: {
    flexWrap: "wrap",
    justifyContent: "center",
  },
  image1IconPosition: {
    top: 0,
    position: "absolute",
  },
  mdiaLayout: {
    maxHeight: 172,
    maxWidth: 164,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    height: 172,
    width: 164,
    borderRadius: Border.br_3xs,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.colorBlack,
  },
  topFlexBox: {
    justifyContent: "space-between",
    left: "50%",
    alignItems: "center",
  },
  iconLayout2: {
    width: "100%",
    height: "100%",
  },
  iconLayout1: {
    height: 32,
    width: 32,
  },
  bottomLayout: {
    width: 370,
    flexDirection: "row",
    position: "absolute",
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
  header1: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  header: {
    right: "0%",
    bottom: "0%",
    height: "100%",
  },
  generosDeMdia: {
    width: 344,
    zIndex: 0,
    height: 24,
  },
  image1Icon: {
    left: -3,
    width: 171,
    height: 182,
    zIndex: 0,
  },
  mdiaGenricaChild: {
    backgroundColor: Color.colorGray_200,
    left: 0,
    height: 172,
    width: 164,
    top: 0,
    zIndex: 1,
  },
  ao: {
    fontSize: FontSize.size_11xl,
    fontWeight: "200",
    fontFamily: FontFamily.interExtraLight,
    textAlign: "center",
    display: "flex",
    marginTop: 7,
    zIndex: 2,
    justifyContent: "center",
    color: Color.colorWhite,
    alignSelf: "stretch",
    alignItems: "center",
  },
  mdiaGenrica1: {
    marginLeft: 10,
  },
  generosDeMdia2: {
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
  },
  generosDeMdia1: {
    marginTop: 10,
    zIndex: 1,
  },
  icon: {
    maxWidth: 32,
    maxHeight: 32,
    height: "100%",
  },
  bell11Icon: {
    width: 16,
    height: 16,
  },
  icon1: {
    height: "100%",
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
    zIndex: 2,
    flexDirection: "row",
    position: "absolute",
    justifyContent: "space-between",
    left: "50%",
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
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  bottomNavBarInner: {
    top: -48,
    height: 57,
    alignItems: "flex-end",
    padding: Padding.p_3xs,
    zIndex: 5,
    left: 0,
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
  generos: {
    height: 1245,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_31xl,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorBlack,
    width: "100%",
  },
});

export default Generos;
