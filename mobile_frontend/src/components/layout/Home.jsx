import React from "react";
import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, Padding, FontSize } from "../../GlobalStyles";

export const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      <View style={styles.content}>
        <Text style={[styles.header, styles.headerFlexBox]}>
          Popular Reviews
        </Text>
        {/* Example for review section */}
        <View style={styles.reviewSection}>
          <LinearGradient
            style={styles.reviewGradient}
            locations={[0, 1]}
            colors={['#33f5f0', '#043737']}
          >
            <View style={styles.reviewContent}>
              <Image
                style={styles.profileIcon}
                source={require("../../assets/profile.png")}
              />
              <Text style={styles.reviewText}>Best Anime Ever!</Text>
              <Image
                style={styles.reviewImage}
                source={require("../../assets/kg-2.png")}
              />
            </View>
          </LinearGradient>
        </View>


        {/* Example for media content */}
        <Text style={[styles.header, styles.headerFlexBox]}>
          Movies
        </Text>
        <View style={styles.mediaSection}>
          <Pressable
            onPress={() => navigation.navigate("Genres")}
            style={styles.mediaButton}
          >
            <Image style={styles.mediaIcon} source={require("../../assets/kg-2.png")} />
            {/* <Text style={styles.mediaText}>Movies</Text> */}
          </Pressable>
          {/* Repeat for other media types */}
        </View>

        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorBlack,
  },
  header: {
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: Padding.p_3xs,
  },
  logo: {
    width: 32,
    height: 32,
  },
  content: {
    flex: 1,
    padding: Padding.p_5xs,
  },
  mediaSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: Padding.p_31xl,
  },
  mediaButton: {
    alignItems: 'center',
    padding: Padding.p_11xs,
  },
  mediaIcon: {
    width: 119,
    height: 119,
  },
  mediaText: {
    marginTop: 5,
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
  },
  reviewSection: {
    marginTop: Padding.p_31xl,
  },
  reviewGradient: {
    borderRadius: Border.br_xl,
    padding: Padding.p_3xs,
  },
  reviewContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    width: 34,
    height: 34,
  },
  reviewText: {
    flex: 1,
    marginLeft: 10,
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
  },
  reviewImage: {
    width: 100,
    height: 131,
    borderRadius: Border.br_3xs,
    marginLeft: 10,
  },
  risingReviews: {
    alignSelf: "stretch",
    height: 218,
    zIndex: 0,
  },
  headerFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
  },

});
