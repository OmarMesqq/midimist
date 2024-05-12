import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Header = () => {
  return (
    <View style={styles.header}>
      <View
        style={[
          styles.property1cabecalhoFilme,
          styles.property1cabecalhoLayout,
        ]}
      >
        <Text style={styles.header1}>Generos de Filmes</Text>
      </View>
      <View
        style={[
          styles.property1cabecalhoLivro,
          styles.property1cabecalhoLayout,
        ]}
      >
        <Text style={styles.header1}>Generos de Livros</Text>
      </View>
      <View
        style={[
          styles.property1cabecalhoMusica,
          styles.property1cabecalhoLayout,
        ]}
      >
        <Text style={styles.header1}>Generos de Músicas</Text>
      </View>
      <View
        style={[
          styles.property1cabecalhoAnime,
          styles.property1cabecalhoLayout,
        ]}
      >
        <Text style={styles.header1}>Generos de Animes</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1cabecalhoLayout: {
    height: 24,
    width: 344,
    left: 20,
    position: "absolute",
  },
  header1: {
    width: "100%",
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  property1cabecalhoFilme: {
    top: 20,
  },
  property1cabecalhoLivro: {
    top: 64,
  },
  property1cabecalhoMusica: {
    top: 108,
  },
  property1cabecalhoAnime: {
    top: 152,
  },
  header: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 384,
    height: 196,
    overflow: "hidden",
  },
});

export default Header;
