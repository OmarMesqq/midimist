import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const MdiaGenrica = () => {
  return <View style={styles.mdiaGenrica} />;
};

const styles = StyleSheet.create({
  mdiaGenrica: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorBlack,
    width: 50,
    height: 67,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MdiaGenrica;
