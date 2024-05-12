import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const BottomNavBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomNavBar}>
      <View style={styles.property1home}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/home3-11.png")}
        />
        <Pressable
          style={styles.iconLayout}
          onPress={() => navigation.navigate("Conversas")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/chat1-11.png")}
          />
        </Pressable>
        <Image
          style={styles.plus11IconLayout}
          contentFit="cover"
          source={require("../assets/plus1-11.png")}
        />
        <Pressable
          style={styles.iconLayout}
          onPress={() => navigation.navigate("Pesquisa1")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/list1-11.png")}
          />
        </Pressable>
        <Pressable
          style={styles.iconLayout}
          onPress={() => navigation.navigate("Pesquisa")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/loupe1-21.png")}
          />
        </Pressable>
      </View>
      <View style={styles.property1chatsShadowBox}>
        <Pressable
          style={styles.iconLayout}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/home3-12.png")}
          />
        </Pressable>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/chat1-12.png")}
        />
        <Image
          style={styles.plus11IconLayout}
          contentFit="cover"
          source={require("../assets/plus1-11.png")}
        />
        <Pressable
          style={styles.iconLayout}
          onPress={() => navigation.navigate("Pesquisa1")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/list1-11.png")}
          />
        </Pressable>
        <Pressable
          style={styles.iconLayout}
          onPress={() => navigation.navigate("Pesquisa")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/loupe1-21.png")}
          />
        </Pressable>
      </View>
      <View style={styles.property1chatsShadowBox}>
        <Pressable
          style={styles.iconLayout}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/home3-12.png")}
          />
        </Pressable>
        <Pressable
          style={styles.iconLayout}
          onPress={() => navigation.navigate("Conversas")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/chat1-11.png")}
          />
        </Pressable>
        <Image
          style={styles.plus11IconLayout}
          contentFit="cover"
          source={require("../assets/plus1-11.png")}
        />
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/list1-12.png")}
        />
        <Pressable
          style={styles.iconLayout}
          onPress={() => navigation.navigate("Pesquisa")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/loupe1-21.png")}
          />
        </Pressable>
      </View>
      <View style={styles.property1chatsShadowBox}>
        <Pressable
          style={[styles.home312, styles.iconLayout]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/home3-12.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.chat112, styles.iconLayout]}
          onPress={() => navigation.navigate("Conversas")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/chat1-11.png")}
          />
        </Pressable>
        <Image
          style={[styles.plus11Icon3, styles.plus11IconLayout]}
          contentFit="cover"
          source={require("../assets/plus1-11.png")}
        />
        <Pressable
          style={[styles.list112, styles.iconLayout]}
          onPress={() => navigation.navigate("Pesquisa1")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/list1-11.png")}
          />
        </Pressable>
        <Image
          style={[styles.loupe12Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/loupe1-22.png")}
        />
        <View
          style={[styles.property1searchInner, styles.loupe12ParentFlexBox]}
        >
          <View style={[styles.loupe12Parent, styles.loupe12ParentFlexBox]}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/loupe1-21.png")}
            />
            <Text style={styles.search}>search</Text>
          </View>
        </View>
      </View>
      <View style={styles.property1chatsShadowBox}>
        <Pressable
          style={[styles.home312, styles.iconLayout]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/home3-12.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.chat112, styles.iconLayout]}
          onPress={() => navigation.navigate("Conversas")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/chat1-11.png")}
          />
        </Pressable>
        <Image
          style={[styles.plus11Icon3, styles.plus11IconLayout]}
          contentFit="cover"
          source={require("../assets/plus1-11.png")}
        />
        <Image
          style={[styles.list112, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/list1-13.png")}
        />
        <Pressable
          style={[styles.loupe12Icon, styles.iconLayout]}
          onPress={() => navigation.navigate("Pesquisa")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/loupe1-23.png")}
          />
        </Pressable>
        <View
          style={[styles.property1searchInner, styles.loupe12ParentFlexBox]}
        >
          <View style={[styles.loupe12Parent, styles.loupe12ParentFlexBox]}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/loupe1-21.png")}
            />
            <Text style={styles.search}>search</Text>
          </View>
        </View>
      </View>
      <View style={styles.property1chatsShadowBox}>
        <Pressable
          style={styles.iconLayout}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/home3-13.png")}
          />
        </Pressable>
        <Pressable
          style={styles.iconLayout}
          onPress={() => navigation.navigate("Conversas")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/chat1-11.png")}
          />
        </Pressable>
        <Image
          style={styles.plus11IconLayout}
          contentFit="cover"
          source={require("../assets/plus1-11.png")}
        />
        <Pressable
          style={styles.iconLayout}
          onPress={() => navigation.navigate("Pesquisa1")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/list1-11.png")}
          />
        </Pressable>
        <Pressable
          style={styles.iconLayout}
          onPress={() => navigation.navigate("Pesquisa")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/loupe1-21.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 24,
    width: 24,
  },
  plus11IconLayout: {
    height: 32,
    width: 32,
  },
  loupe12ParentFlexBox: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  property1home: {
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_11xl,
    justifyContent: "space-between",
    flexDirection: "row",
    height: 48,
    backgroundColor: Color.colorGray_100,
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "center",
    width: 370,
  },
  property1chatsShadowBox: {
    marginTop: 35,
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_11xl,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    height: 48,
    width: 370,
    backgroundColor: Color.colorGray_100,
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  home312: {
    zIndex: 0,
  },
  chat112: {
    zIndex: 1,
  },
  plus11Icon3: {
    zIndex: 2,
  },
  list112: {
    zIndex: 3,
  },
  loupe12Icon: {
    zIndex: 4,
  },
  search: {
    fontSize: FontSize.size_mini,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorWhite,
    textAlign: "left",
    marginLeft: 10,
  },
  loupe12Parent: {
    flex: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDimgray,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_9xs,
    alignItems: "center",
    flexWrap: "wrap",
  },
  property1searchInner: {
    position: "absolute",
    top: -48,
    left: 0,
    height: 57,
    alignItems: "flex-end",
    justifyContent: "center",
    padding: Padding.p_3xs,
    zIndex: 5,
    flexWrap: "wrap",
    width: 370,
  },
  bottomNavBar: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    overflow: "hidden",
    padding: Padding.p_xl,
  },
});

export default BottomNavBar;
