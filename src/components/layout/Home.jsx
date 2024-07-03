import { View, Image, StyleSheet, Dimensions, Text, Pressable, Modal } from 'react-native';
import UserReviewBox from "../commons/UserReviewBox";
import {abateReview} from "../../mocks/UserReviewMocks";	
import Carrossel from "../../components/commons/Carrossel"
import {shrek} from "../../mocks/movieCarouselMocks";
import {useState} from 'react';

export const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currItem, setCurrItem] = useState(null);
  const openModal = (item) => {
    setCurrItem(item);
    setModalVisible(true); 
  };
  const closeModal = () => { setModalVisible(false); };

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
	Movies For you
      </Text>
	<Carrossel
	  data={shrek.data}
	  openModal = {openModal}
	/>
    <Modal visible={modalVisible}>
      item.original_title;
    </Modal>
    
    <Text style={styles.header}>
	Games For you
      </Text>
	<Carrossel
	  data={shrek.data}
	  openModal = {openModal}
	/>
    <Modal visible={modalVisible}>
      item.original_title;
    </Modal>
    <Text style={styles.header}>
	Movies For you
      </Text>
	<Carrossel
	  data={shrek.data}
	  openModal = {openModal}
	/>
    </View>
    <Modal visible={modalVisible}>
      item.original_title;
    </Modal>


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
