import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export const UserReviewBox = ({ username, review, imageUrl }) => {
return (
    <LinearGradient colors={['#33f5f0', '#043737']} style={styles.gradientBox}>
      <View style={styles.textContainer}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.review}>{review}</Text>
      </View>
      <Image source={{ uri: imageUrl }} style={styles.movieImage} />
    </LinearGradient>
);
};

const styles = StyleSheet.create({
  gradientBox: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  username: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  review: {
    color: 'white',
    fontSize: 13,
    marginTop: 0.5,
  },
  movieImage: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
});

export default UserReviewBox;
