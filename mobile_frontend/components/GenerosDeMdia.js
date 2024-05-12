import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const GenerosDeMdia = () => {
  return (
    <View style={styles.generosDeMdia}>
      <View
        style={[
          styles.property1categoriaDeFilme,
          styles.property1categoriaLayout,
        ]}
      >
        <View style={styles.generosDeMdia1}>
          <View style={styles.mdiaLayout}>
            <Image
              style={[styles.image1Icon, styles.image1IconPosition]}
              contentFit="cover"
              source={require("../assets/image-1.png")}
            />
            <View
              style={[styles.mdiaGenricaChild, styles.image1IconPosition]}
            />
            <Text style={styles.ao}>Ação</Text>
          </View>
          <View style={[styles.mdiaGenrica1, styles.mdiaLayout]}>
            <Image
              style={[styles.image1Icon, styles.image1IconPosition]}
              contentFit="cover"
              source={require("../assets/image-12.png")}
            />
            <View
              style={[styles.mdiaGenricaChild, styles.image1IconPosition]}
            />
            <Text style={styles.ao}>Aventura</Text>
          </View>
          <View style={[styles.mdiaGenrica1, styles.mdiaLayout]}>
            <Image
              style={[styles.image1Icon, styles.image1IconPosition]}
              contentFit="cover"
              source={require("../assets/image-13.png")}
            />
            <View
              style={[styles.mdiaGenricaChild, styles.image1IconPosition]}
            />
            <Text style={styles.ao}>Animação</Text>
          </View>
          <View style={[styles.mdiaGenrica1, styles.mdiaLayout]}>
            <Image
              style={[styles.image1Icon, styles.image1IconPosition]}
              contentFit="cover"
              source={require("../assets/image-14.png")}
            />
            <View
              style={[styles.mdiaGenricaChild, styles.image1IconPosition]}
            />
            <Text style={styles.ao}>Comédia</Text>
          </View>
          <View style={[styles.mdiaGenrica1, styles.mdiaLayout]}>
            <Image
              style={[styles.image1Icon, styles.image1IconPosition]}
              contentFit="cover"
              source={require("../assets/image-15.png")}
            />
            <View
              style={[styles.mdiaGenricaChild, styles.image1IconPosition]}
            />
            <Text style={styles.ao}>Crime</Text>
          </View>
          <View style={[styles.mdiaGenrica1, styles.mdiaLayout]}>
            <Image
              style={[styles.image1Icon, styles.image1IconPosition]}
              contentFit="cover"
              source={require("../assets/image-16.png")}
            />
            <View
              style={[styles.mdiaGenricaChild, styles.image1IconPosition]}
            />
            <Text style={styles.ao}>Documentario</Text>
          </View>
          <View style={[styles.mdiaGenrica1, styles.mdiaLayout]}>
            <Image
              style={[styles.image1Icon, styles.image1IconPosition]}
              contentFit="cover"
              source={require("../assets/image-17.png")}
            />
            <View
              style={[styles.mdiaGenricaChild, styles.image1IconPosition]}
            />
            <Text style={styles.ao}>Drama</Text>
          </View>
          <View style={[styles.mdiaGenrica1, styles.mdiaLayout]}>
            <Image
              style={[styles.image1Icon, styles.image1IconPosition]}
              contentFit="cover"
              source={require("../assets/image-18.png")}
            />
            <View
              style={[styles.mdiaGenricaChild, styles.image1IconPosition]}
            />
            <Text style={styles.ao}>Família</Text>
          </View>
          <View style={[styles.mdiaGenrica1, styles.mdiaLayout]}>
            <Image
              style={[styles.image1Icon, styles.image1IconPosition]}
              contentFit="cover"
              source={require("../assets/image-19.png")}
            />
            <View
              style={[styles.mdiaGenricaChild, styles.image1IconPosition]}
            />
            <Text style={styles.ao}>Fantasia</Text>
          </View>
          <View style={[styles.mdiaGenrica1, styles.mdiaLayout]}>
            <Image
              style={[styles.image1Icon, styles.image1IconPosition]}
              contentFit="cover"
              source={require("../assets/image-110.png")}
            />
            <View
              style={[styles.mdiaGenricaChild, styles.image1IconPosition]}
            />
            <Text style={styles.ao}>História</Text>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.property1categoriaDeAnime,
          styles.property1categoriaLayout,
        ]}
      >
        <View style={styles.generosDeMdia1}>
          <View style={styles.mdiaLayout}>
            <Image
              style={[styles.image1Icon, styles.image1IconPosition]}
              contentFit="cover"
              source={require("../assets/image-111.png")}
            />
            <View
              style={[styles.mdiaGenricaChild, styles.image1IconPosition]}
            />
            <Text style={styles.ao}>Ação</Text>
          </View>
          <View style={[styles.mdiaGenrica1, styles.mdiaLayout]}>
            <Image
              style={[styles.image1Icon, styles.image1IconPosition]}
              contentFit="cover"
              source={require("../assets/image-112.png")}
            />
            <View
              style={[styles.mdiaGenricaChild, styles.image1IconPosition]}
            />
            <Text style={styles.ao}>Shounen</Text>
          </View>
          <View style={[styles.mdiaGenrica1, styles.mdiaLayout]}>
            <Image
              style={[styles.image1Icon, styles.image1IconPosition]}
              contentFit="cover"
              source={require("../assets/image-113.png")}
            />
            <View
              style={[styles.mdiaGenricaChild, styles.image1IconPosition]}
            />
            <Text style={styles.ao}>Ficção</Text>
          </View>
          <View style={[styles.mdiaGenrica1, styles.mdiaLayout]}>
            <Image
              style={[styles.image1Icon, styles.image1IconPosition]}
              contentFit="cover"
              source={require("../assets/image-114.png")}
            />
            <View
              style={[styles.mdiaGenricaChild, styles.image1IconPosition]}
            />
            <Text style={styles.ao}>Comédia</Text>
          </View>
          <View style={[styles.mdiaGenrica1, styles.mdiaLayout]}>
            <Image
              style={[styles.image1Icon, styles.image1IconPosition]}
              contentFit="cover"
              source={require("../assets/image-115.png")}
            />
            <View
              style={[styles.mdiaGenricaChild, styles.image1IconPosition]}
            />
            <Text style={styles.ao}>Drama</Text>
          </View>
          <View style={[styles.mdiaGenrica1, styles.mdiaLayout]}>
            <Image
              style={[styles.image1Icon, styles.image1IconPosition]}
              contentFit="cover"
              source={require("../assets/image-116.png")}
            />
            <View
              style={[styles.mdiaGenricaChild, styles.image1IconPosition]}
            />
            <Text style={styles.ao}>Fantasia</Text>
          </View>
          <View style={[styles.mdiaGenrica1, styles.mdiaLayout]}>
            <Image
              style={[styles.image1Icon, styles.image1IconPosition]}
              contentFit="cover"
              source={require("../assets/image-117.png")}
            />
            <View
              style={[styles.mdiaGenricaChild, styles.image1IconPosition]}
            />
            <Text style={styles.ao}>Shoujo</Text>
          </View>
          <View style={[styles.mdiaGenrica1, styles.mdiaLayout]}>
            <Image
              style={[styles.image1Icon, styles.image1IconPosition]}
              contentFit="cover"
              source={require("../assets/image-118.png")}
            />
            <View
              style={[styles.mdiaGenricaChild, styles.image1IconPosition]}
            />
            <Text style={styles.ao}>Slice Of Life</Text>
          </View>
          <View style={[styles.mdiaGenrica1, styles.mdiaLayout]}>
            <Image
              style={[styles.image1Icon, styles.image1IconPosition]}
              contentFit="cover"
              source={require("../assets/image-119.png")}
            />
            <View
              style={[styles.mdiaGenricaChild, styles.image1IconPosition]}
            />
            <Text style={styles.ao}>Sports</Text>
          </View>
          <View style={[styles.mdiaGenrica1, styles.mdiaLayout]}>
            <Image
              style={[styles.image1Icon, styles.image1IconPosition]}
              contentFit="cover"
              source={require("../assets/image-120.png")}
            />
            <View
              style={[styles.mdiaGenricaChild, styles.image1IconPosition]}
            />
            <Text style={styles.ao}>Sobrenatural</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1categoriaLayout: {
    height: 925,
    width: 344,
    left: 20,
    position: "absolute",
  },
  image1IconPosition: {
    top: 0,
    position: "absolute",
  },
  mdiaLayout: {
    maxHeight: 172,
    maxWidth: 164,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_3xs,
    alignItems: "center",
    height: 172,
    width: 164,
    overflow: "hidden",
    borderWidth: 1,
  },
  image1Icon: {
    left: -3,
    width: 171,
    height: 182,
    zIndex: 0,
  },
  mdiaGenricaChild: {
    left: 0,
    backgroundColor: Color.colorGray_200,
    zIndex: 1,
    height: 172,
    width: 164,
    top: 0,
  },
  ao: {
    fontSize: FontSize.size_11xl,
    fontWeight: "200",
    fontFamily: FontFamily.interExtraLight,
    color: Color.colorWhite,
    textAlign: "center",
    display: "flex",
    zIndex: 2,
    marginTop: 7,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  mdiaGenrica1: {
    marginLeft: 10,
  },
  generosDeMdia1: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  property1categoriaDeFilme: {
    top: 20,
  },
  property1categoriaDeAnime: {
    top: 965,
  },
  generosDeMdia: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    width: 384,
    height: 1910,
    overflow: "hidden",
    borderWidth: 1,
  },
});

export default GenerosDeMdia;
