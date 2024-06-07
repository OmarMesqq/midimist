import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MovieItem = ({ image, title, status, isGridView }) => {
  return (
    <View style={[styles.container, isGridView && styles.gridContainer]}>
      <Image source={image} style={[styles.image, isGridView && styles.gridImage]} />
      <View style={[styles.textContainer, isGridView && styles.gridTextContainer]}>
        <Text style={[styles.title, isGridView && styles.gridTitle]}>{title}</Text>
        {!isGridView && (
          <View style={styles.statusContainer}>
            <Text style={styles.statusText}>{status}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  gridContainer: {
    flexDirection: 'column',
    padding: 5,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  gridImage: {
    width: 150,
    height: 200,
    borderRadius: 10,
    marginRight: 0,
    marginBottom: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  gridTextContainer: {
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  gridTitle: {
    fontSize: 14,
    textAlign: 'center',
  },
  statusContainer: {
    backgroundColor: '#333',
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 5,
    alignItems: 'center',
    marginTop: 5,
  },
  statusText: {
    color: 'white',
    fontSize: 12,
  },
});

export default MovieItem;
