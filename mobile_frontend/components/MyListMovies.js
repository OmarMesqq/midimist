import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const MyListMovies = () => {
  return (
    <View style={styles.myListMovies}>
      <View style={[styles.property1myListMovies, styles.property1myLayout]}>
        <Text style={styles.myListMovies1}>My List: Movies</Text>
      </View>
      <View style={[styles.property1myListsSeries, styles.property1myLayout]}>
        <Text style={styles.myListMovies1}>My List: Series</Text>
      </View>
      <View style={[styles.property1myListsAnimes, styles.property1myLayout]}>
        <Text style={styles.myListMovies1}>My List: Animes</Text>
      </View>
      <View style={[styles.property1myListsBooks, styles.property1myLayout]}>
        <Text style={styles.myListMovies1}>My List: Books</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1myLayout: {
    height: 24,
    width: 152,
    left: 20,
    position: "absolute",
  },
  myListMovies1: {
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  property1myListMovies: {
    top: 20,
  },
  property1myListsSeries: {
    top: 64,
  },
  property1myListsAnimes: {
    top: 108,
  },
  property1myListsBooks: {
    top: 152,
  },
  myListMovies: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 192,
    height: 196,
    overflow: "hidden",
  },
});

export default MyListMovies;
