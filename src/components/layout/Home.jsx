import { View, Text, StyleSheet, Modal, Button, ScrollView} from 'react-native';
import UserReviewBox from "../commons/UserReviewBox";
import { abateReview } from "../../mocks/UserReviewMocks";	
import Carrossel from "../../components/commons/Carrossel";
import { shrek, seriesTV, animeData } from "../../mocks/movieCarouselMocks";
import { useState } from 'react';

export const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currItem, setCurrItem] = useState(null);
  const openModal = (item) => {
    setCurrItem(item);
    setModalVisible(true); 
  };
  const closeModal = () => { setModalVisible(false); };

  return (
    <ScrollView>
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Popular Reviews</Text>
        <UserReviewBox
          username={abateReview.username}
          review={abateReview.review}
          imageUrl={abateReview.imageUrl}
        />
      </View>
      
      <View style={styles.section}>
        <Text style={styles.header}>Movies For You</Text>
        <Carrossel
          data={shrek.data}
          openModal={openModal}
        />
      </View>
      
      <View style={styles.section}>
        <Text style={styles.header}>TV Series For You</Text>
        <Carrossel
          data={seriesTV.data}
          openModal={openModal}
        />
      </View>
      
      <View style={styles.section}>
        <Text style={styles.header}>Anime For You</Text>
        <Carrossel
          data={animeData.data}
          openModal={openModal}
        />
      </View>

      <Modal visible={modalVisible} onRequestClose={closeModal}>
        <View style={styles.modalContent}>
          <Text>{currItem?.original_title}</Text>
	  <Text>{currItem?.overview}</Text>
          <Button title="Close" onPress={closeModal} />
        </View>
      </Modal>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },
  section: {
    marginBottom: 10,
  },
  header: {
    fontSize: 20,
    color: '#fff',
    marginVertical: 15,
    textAlign: 'left',
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
});
