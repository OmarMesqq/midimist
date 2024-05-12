import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const MdiaGenrica1 = () => {
  return (
    <View style={styles.mdiaGenrica}>
      <View style={styles.property1flimeAoLayout}>
        <Image
          style={[styles.image1Icon, styles.image1IconPosition]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <View
          style={[styles.property1flimeAoChild, styles.image1IconPosition]}
        />
        <Text style={styles.ao}>Ação</Text>
      </View>
      <View
        style={[styles.property1filmeAventura, styles.property1flimeAoLayout]}
      >
        <Image
          style={[styles.image1Icon, styles.image1IconPosition]}
          contentFit="cover"
          source={require("../assets/image-12.png")}
        />
        <View
          style={[styles.property1flimeAoChild, styles.image1IconPosition]}
        />
        <Text style={styles.ao}>Aventura</Text>
      </View>
      <View
        style={[styles.property1filmeAventura, styles.property1flimeAoLayout]}
      >
        <Image
          style={[styles.image1Icon, styles.image1IconPosition]}
          contentFit="cover"
          source={require("../assets/image-13.png")}
        />
        <View
          style={[styles.property1flimeAoChild, styles.image1IconPosition]}
        />
        <Text style={styles.ao}>Animação</Text>
      </View>
      <View
        style={[styles.property1filmeAventura, styles.property1flimeAoLayout]}
      >
        <Image
          style={[styles.image1Icon, styles.image1IconPosition]}
          contentFit="cover"
          source={require("../assets/image-14.png")}
        />
        <View
          style={[styles.property1flimeAoChild, styles.image1IconPosition]}
        />
        <Text style={styles.ao}>Comédia</Text>
      </View>
      <View
        style={[styles.property1filmeAventura, styles.property1flimeAoLayout]}
      >
        <Image
          style={[styles.image1Icon, styles.image1IconPosition]}
          contentFit="cover"
          source={require("../assets/image-15.png")}
        />
        <View
          style={[styles.property1flimeAoChild, styles.image1IconPosition]}
        />
        <Text style={styles.ao}>Crime</Text>
      </View>
      <View
        style={[styles.property1filmeAventura, styles.property1flimeAoLayout]}
      >
        <Image
          style={[styles.image1Icon, styles.image1IconPosition]}
          contentFit="cover"
          source={require("../assets/image-16.png")}
        />
        <View
          style={[styles.property1flimeAoChild, styles.image1IconPosition]}
        />
        <Text style={styles.ao}>Documentario</Text>
      </View>
      <View
        style={[styles.property1filmeAventura, styles.property1flimeAoLayout]}
      >
        <Image
          style={[styles.image1Icon, styles.image1IconPosition]}
          contentFit="cover"
          source={require("../assets/image-17.png")}
        />
        <View
          style={[styles.property1flimeAoChild, styles.image1IconPosition]}
        />
        <Text style={styles.ao}>Drama</Text>
      </View>
      <View
        style={[styles.property1filmeAventura, styles.property1flimeAoLayout]}
      >
        <Image
          style={[styles.image1Icon, styles.image1IconPosition]}
          contentFit="cover"
          source={require("../assets/image-18.png")}
        />
        <View
          style={[styles.property1flimeAoChild, styles.image1IconPosition]}
        />
        <Text style={styles.ao}>Família</Text>
      </View>
      <View
        style={[styles.property1filmeAventura, styles.property1flimeAoLayout]}
      >
        <Image
          style={[styles.image1Icon, styles.image1IconPosition]}
          contentFit="cover"
          source={require("../assets/image-19.png")}
        />
        <View
          style={[styles.property1flimeAoChild, styles.image1IconPosition]}
        />
        <Text style={styles.ao}>Fantasia</Text>
      </View>
      <View
        style={[styles.property1filmeAventura, styles.property1flimeAoLayout]}
      >
        <Image
          style={[styles.image1Icon, styles.image1IconPosition]}
          contentFit="cover"
          source={require("../assets/image-110.png")}
        />
        <View
          style={[styles.property1flimeAoChild, styles.image1IconPosition]}
        />
        <Text style={styles.ao}>História</Text>
      </View>
      <View
        style={[styles.property1filmeAventura, styles.property1flimeAoLayout]}
      >
        <Image
          style={[styles.image1Icon, styles.image1IconPosition]}
          contentFit="cover"
          source={require("../assets/image-111.png")}
        />
        <View
          style={[styles.property1flimeAoChild, styles.image1IconPosition]}
        />
        <Text style={styles.ao}>Ação</Text>
      </View>
      <View
        style={[styles.property1filmeAventura, styles.property1flimeAoLayout]}
      >
        <Image
          style={[styles.image1Icon, styles.image1IconPosition]}
          contentFit="cover"
          source={require("../assets/image-112.png")}
        />
        <View
          style={[styles.property1flimeAoChild, styles.image1IconPosition]}
        />
        <Text style={styles.ao}>Shounen</Text>
      </View>
      <View
        style={[styles.property1filmeAventura, styles.property1flimeAoLayout]}
      >
        <Image
          style={[styles.image1Icon, styles.image1IconPosition]}
          contentFit="cover"
          source={require("../assets/image-113.png")}
        />
        <View
          style={[styles.property1flimeAoChild, styles.image1IconPosition]}
        />
        <Text style={styles.ao}>Ficção</Text>
      </View>
      <View
        style={[styles.property1filmeAventura, styles.property1flimeAoLayout]}
      >
        <Image
          style={[styles.image1Icon, styles.image1IconPosition]}
          contentFit="cover"
          source={require("../assets/image-114.png")}
        />
        <View
          style={[styles.property1flimeAoChild, styles.image1IconPosition]}
        />
        <Text style={styles.ao}>Comédia</Text>
      </View>
      <View
        style={[styles.property1filmeAventura, styles.property1flimeAoLayout]}
      >
        <Image
          style={[styles.image1Icon, styles.image1IconPosition]}
          contentFit="cover"
          source={require("../assets/image-115.png")}
        />
        <View
          style={[styles.property1flimeAoChild, styles.image1IconPosition]}
        />
        <Text style={styles.ao}>Drama</Text>
      </View>
      <View
        style={[styles.property1filmeAventura, styles.property1flimeAoLayout]}
      >
        <Image
          style={[styles.image1Icon, styles.image1IconPosition]}
          contentFit="cover"
          source={require("../assets/image-116.png")}
        />
        <View
          style={[styles.property1flimeAoChild, styles.image1IconPosition]}
        />
        <Text style={styles.ao}>Fantasia</Text>
      </View>
      <View
        style={[styles.property1filmeAventura, styles.property1flimeAoLayout]}
      >
        <Image
          style={[styles.image1Icon, styles.image1IconPosition]}
          contentFit="cover"
          source={require("../assets/image-117.png")}
        />
        <View
          style={[styles.property1flimeAoChild, styles.image1IconPosition]}
        />
        <Text style={styles.ao}>Shoujo</Text>
      </View>
      <View
        style={[styles.property1filmeAventura, styles.property1flimeAoLayout]}
      >
        <Image
          style={[styles.image1Icon, styles.image1IconPosition]}
          contentFit="cover"
          source={require("../assets/image-118.png")}
        />
        <View
          style={[styles.property1flimeAoChild, styles.image1IconPosition]}
        />
        <Text style={styles.ao}>Slice Of Life</Text>
      </View>
      <View
        style={[styles.property1filmeAventura, styles.property1flimeAoLayout]}
      >
        <Image
          style={[styles.image1Icon, styles.image1IconPosition]}
          contentFit="cover"
          source={require("../assets/image-119.png")}
        />
        <View
          style={[styles.property1flimeAoChild, styles.image1IconPosition]}
        />
        <Text style={styles.ao}>Sports</Text>
      </View>
      <View
        style={[styles.property1filmeAventura, styles.property1flimeAoLayout]}
      >
        <Image
          style={[styles.image1Icon, styles.image1IconPosition]}
          contentFit="cover"
          source={require("../assets/image-120.png")}
        />
        <View
          style={[styles.property1flimeAoChild, styles.image1IconPosition]}
        />
        <Text style={styles.ao}>Sobrenatural</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image1IconPosition: {
    top: 0,
    position: "absolute",
  },
  property1flimeAoLayout: {
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
  property1flimeAoChild: {
    left: 0,
    backgroundColor: Color.colorGray_200,
    zIndex: 1,
    height: 172,
    width: 164,
    top: 0,
    position: "absolute",
  },
  ao: {
    alignSelf: "stretch",
    flex: 1,
    fontSize: FontSize.size_11xl,
    fontWeight: "200",
    fontFamily: FontFamily.interExtraLight,
    color: Color.colorWhite,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    zIndex: 2,
    marginTop: 7,
    alignItems: "center",
  },
  property1filmeAventura: {
    marginLeft: 20,
  },
  mdiaGenrica: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    width: 940,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: Padding.p_xl,
    overflow: "hidden",
    borderWidth: 1,
  },
});

export default MdiaGenrica1;
