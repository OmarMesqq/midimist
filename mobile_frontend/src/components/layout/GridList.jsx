import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Switch } from 'react-native';
import MovieItem from '../commons/MovieItem';

export const List = () => {
  const [isGridView, setIsGridView] = useState(false);

  const movies = [
    { id: '1', image: require('../../assets/images/dune.png'), title: 'Dune: Part Two', status: 'Planning' },
    { id: '2', image: require('../../assets/images/shrek.png'), title: 'Shrek 2', status: 'Watching' },
    { id: '3', image: require('../../assets/images/kong.png'), title: 'Kong', status: 'Watching' },
    { id: '4', image: require('../../assets/images/kungfupanda.png'), title: 'Kung Fu Panda', status: 'Watching' },
    { id: '5', image: require('../../assets/images/dune.png'), title: 'Dune: Part Two', status: 'Planning' },
    { id: '6', image: require('../../assets/images/shrek.png'), title: 'Shrek 2', status: 'Watching' },
    { id: '7', image: require('../../assets/images/kong.png'), title: 'Kong', status: 'Watching' },
    { id: '8', image: require('../../assets/images/kungfupanda.png'), title: 'Kung Fu Panda', status: 'Watching' },
    { id: '9', image: require('../../assets/images/dune.png'), title: 'Dune: Part Two', status: 'Planning' },
    { id: '10', image: require('../../assets/images/shrek.png'), title: 'Shrek 2', status: 'Watching' },
    { id: '11', image: require('../../assets/images/kong.png'), title: 'Kong', status: 'Watching' },
    { id: '12', image: require('../../assets/images/kungfupanda.png'), title: 'Kung Fu Panda', status: 'Watching' },
  ];

  const renderItem = ({ item }) => (
    <MovieItem
      image={item.image}
      title={item.title}
      status={item.status}
      isGridView={isGridView} // Passa a prop isGridView
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <Text style={styles.header}>My List: Movies</Text>
        <Switch
          value={isGridView}
          onValueChange={(value) => setIsGridView(value)}
        />
      </View>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={renderItem} // Certifique-se de que a função renderItem está definida e passada corretamente
        key={isGridView ? 'grid' : 'list'} // Altere a chave para forçar a re-renderização
        style={styles.movieList}
        numColumns={isGridView ? 2 : 1}
        columnWrapperStyle={isGridView && styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    marginTop: -20,
    padding: 13,
  },
  header: {
    fontSize: 20,
    color: '#fff',
    marginVertical: 15,
    textAlign: 'left',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  movieList: {
    flex: 1,
  },
  row: {
    justifyContent: 'space-between',
  },
});

export default List;
