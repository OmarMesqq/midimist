import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const FrameComponentSet = () => {
  return (
    <View style={styles.property1personChatParent}>
      <View style={[styles.property1personChat, styles.chatLayout]}>
        <Image
          style={styles.profileIcon}
          contentFit="cover"
          source={require("../assets/profile-icon4.png")}
        />
        <View style={styles.nomeParent}>
          <Text style={styles.nome}>Nome</Text>
          <Text style={[styles.ultimaMensagem, styles.tempoTypo]}>
            Ultima mensagem - tempo
          </Text>
        </View>
        <Text style={[styles.tempo, styles.tempoTypo]}>Tempo</Text>
      </View>
      <View style={[styles.property1groupChat, styles.chatLayout]}>
        <Image
          style={styles.groupImageIcon}
          contentFit="cover"
          source={require("../assets/group-image.png")}
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
  );
};

const styles = StyleSheet.create({
  chatLayout: {
    padding: Padding.p_3xs,
    flexDirection: "row",
    width: 344,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_3xs,
    left: 20,
    position: "absolute",
  },
  tempoTypo: {
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  profileIcon: {
    width: 50,
    height: 50,
  },
  nome: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  ultimaMensagem: {
    marginTop: 10,
  },
  nomeParent: {
    flex: 1,
    height: 28,
    marginLeft: 10,
  },
  tempo: {
    marginLeft: 10,
  },
  property1personChat: {
    top: 20,
  },
  groupImageIcon: {
    width: 48,
    height: 48,
  },
  property1groupChat: {
    top: 110,
  },
  property1personChatParent: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 384,
    height: 200,
    overflow: "hidden",
  },
});

export default FrameComponentSet;
