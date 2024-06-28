import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, FlatList } from 'react-native';

const Categories = [
  { name: 'Anime', image: require('../../assets/images/Anime.jpg') },
  { name: 'Movies', image: require('../../assets/images/Movies.jpg') },
  { name: 'Games', image: require('../../assets/images/Games.jpg') },
  { name: 'Books', image: require('../../assets/images/Books.jpg') },
  { name: 'Music', image: require('../../assets/images/Music.jpg') },
  { name: 'TV Shows', image: require('../../assets/images/TVShows.jpg') },
  { name: 'Manga', image: require('../../assets/images/Manga.jpg') },
  { name: 'Podcasts', image: require('../../assets/images/Podcasts.jpg') },
];

export const Search = () => {
  const CategoryPressed = (categoryName) => {
    Alert.alert(`You pressed ${categoryName}`);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryContainer} onPress={() => CategoryPressed(item.name)}>
      <Image source={item.image} style={styles.image}/>
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Categories</Text>
      <FlatList
        data={Categories}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={styles.grid}
      />
    </View>
  );
}

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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryContainer: {
    width: '48%',
    marginBottom: 17,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  categoryText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
    fontSize: 16,
  },
});
