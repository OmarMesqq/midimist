import React from 'react';
import { View, Image, StyleSheet, Dimensions, Text } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width: viewPortWidth } = Dimensions.get('window');

const Carrossel = ({ data }) => {

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image 
        source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }} 
        style={styles.poster} 
      />
      <Text style={styles.title}>{item.original_title}</Text>
    </View>
  );

  return (
    <Carousel
      width={viewPortWidth}
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
