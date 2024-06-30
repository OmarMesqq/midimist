import { View, Image, StyleSheet, Dimensions, Text } from 'react-native';
import UserReviewBox from "../commons/UserReviewBox";
import {abateReview} from "../../mocks/UserReviewMocks";	
import Carrossel from "../../components/commons/Carrossel"
import {shrek} from "../../mocks/movieCarouselMocks";

export const Home = () => {
  return (
    <View style={styles.container}>
      <View>
	<Text style={styles.header}>
	  Popular Reviews
       	</Text>
	<UserReviewBox
	  username={abateReview.username}
       	  review={abateReview.review}
       	  imageUrl={abateReview.imageUrl}
     	/>
      </View>
      
    <View>
      <Text style={styles.header}>
	For you
      </Text>

      <Carrossel
	data={shrek.data}
      />
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    marginTop: -20,
    padding: 10,
  },
  header: {
    fontSize: 20,
    color: '#fff',
    marginVertical: 15,
    textAlign: 'left',
  }
});
