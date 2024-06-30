import React from 'react';
import { View, Image, StyleSheet, Dimensions, Text } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import UserReviewBox from "../commons/UserReviewBox";


const { width: viewPortWidth } = Dimensions.get('window');

const Carrossel = ({ data }) => {

const renderItem = ({ item }) => (
  <View style={styles.slide}>
    <UserReviewBox
      imageUrl = { `https://image.tmdb.org/t/p/w500/${item.poster_path}` }
      username={item.original_title}
      review={item.overview}
    />
  </View>
  );

  return (
    <Carousel
      width={viewPortWidth - 10}
      height={200}
      data={data}
      renderItem={renderItem}
      loop={true}
      autoPlay={true}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    //flex: 1,
    //flexDirection: 'row',
    //justifyContent: 'space-between',
    //alignItems: 'center',
    //borderRadius: 5,
    },
  poster: {
    height: 200,
    borderRadius: 20,
    marginBottom: 10,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Carrossel;
