import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Switch } from 'react-native';
import MovieItem from '../commons/MovieItem';

export const List = () => {
  const [isGridView, setIsGridView] = useState(false);

  const movies = [
    { id: '1', image: require('../../assets/images/dune.png'), title: 'Dune: Part Two', status: 'Planning' },
    { id: '2', image: require('../../assets/images/shrek.png'), title: 'Shrek 2', status: 'Watching' },
    { id: '3', image: require('../../assets/images/kong.png'), title: 'Kong', status: 'Watching' },
    { id: '4', image: require('../../assets/images/kungfupanda.png'), title: 'Kung Fu Panda', status: 'Watching' }
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
    <View style={styles.home}>
      <View style={styles.switchContainer}>
        <Text style={styles.headerText}>Movies</Text>
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
  home: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
    paddingTop: 40,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
  },
  movieList: {
    flex: 1,
  },
  row: {
    justifyContent: 'space-between',
  },
});

export default List;
