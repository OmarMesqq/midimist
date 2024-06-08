import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';

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
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Categories</Text>
      <View style={styles.grid}>
        {Categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryContainer} onPress={() => CategoryPressed(category.name)}>
            <Image source={category.image} style={styles.image} />
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
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
    marginBottom: 15,
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
