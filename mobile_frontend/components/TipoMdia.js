import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const TipoMdia = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tipoMdia}>
      <Pressable
        style={styles.mdiaLayout}
        onPress={() => navigation.navigate("Generos")}
      >
        <Image
          style={[styles.image8Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-8.png")}
        />
        <Text style={styles.filmes}>Filmes</Text>
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
        <Text style={styles.filmes}>Livros</Text>
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
        <Text style={styles.filmes}>Séries</Text>
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
        <Text style={styles.filmes}>Músicas</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    zIndex: 0,
    left: 0,
    position: "absolute",
    width: 119,
  },
  mdiaLayout: {
    maxHeight: 28,
    maxWidth: 119,
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_11xl,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: 119,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    flexDirection: "row",
  },
  image4IconPosition: {
    height: 134,
    zIndex: 0,
    left: 0,
    position: "absolute",
    width: 119,
  },
  image8Icon: {
    top: 0,
    height: 28,
  },
  filmes: {
    fontSize: FontSize.size_xl,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorWhite,
    textAlign: "left",
    zIndex: 1,
    marginLeft: 10,
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
    width: 344,
    flexDirection: "row",
  },
});

export default TipoMdia;
