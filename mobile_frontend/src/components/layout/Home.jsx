import { Text, View, StyleSheet, Pressable } from "react-native";
import UserReviewBox from "../commons/UserReviewBox";
import {abateReview} from "../../mocks/UserReviewMocks";	
import Carrossel from "../../components/commons/Carrossel"
import {shrek} from "../../mocks/movieCarouselMocks";

export const Home = () => {
  return (
    <View style={styles.home}>

	  <View style={styles.popularReviews}>
	  	<Text style={styles.headerText}>
       		   Popular Reviews
       		 </Text>
	  	<UserReviewBox
       			 username={abateReview.username}
       			 review={abateReview.review}
       			 imageUrl={abateReview.imageUrl}
     		 />
	  </View>

	  <View style={styles.mediaTypes}>
	  </View>
	
	  <View style={styles.forYou}>
		<Text style={styles.headerText}>
       			For You   
	  </Text>
    
    <Carrossel
    data={shrek.data}
    renderItem={({ item }) => (
        item && item.poster_path ? (
            <Image source={{ uri: item.poster_path }} style={{ width: 500, height: 500 }} />
        ) : null
    )}
    itemWidth={500}
    sliderWidth={500}
  />
    
    </View>
    </View>
  );
};


const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
  },
  popularReviews: {
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
  },
  mediaTypes: {
    marginBottom: 20,
  },
  forYou: {
    marginBottom: 20,
  },
  Carrossel:{
    marginBottom: 20
  }
});
