import React from "react";
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from "react-native-snap-carousel";
//import { get_instance, instance_type } from "../../api/instance";
//import { get_movie_details, get_movie_id } from "../../api_handler/api_handler"

const {width: viewPortWidth} = Dimensions.get('window');

const Carrossel = ({ data }) => {
    const renderItem = ({ item }) => (
      <View style={styles.slide}>
      {item && item.poster_path ? (
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        style={styles.poster}
      />
    ) : null}
  </View>
);
  
    return (
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={viewPortWidth}
        itemWidth={viewPortWidth * 0.75}
        loop={true}
        autoplay={true}
      />
    );
  };
  
  const styles = StyleSheet.create({
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    poster: {
      width: '100%',
      height: 200, 
      borderRadius: 10,
      marginBottom: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  
  export default Carrossel;