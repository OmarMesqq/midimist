import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const AddMedia = () => {
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [score, setScore] = useState(0);

  const statusArray = ['Consumed', 'Consuming', 'Dropped', 'Planning'];

  return (
    <View style={styles.container}>
    <Text style={styles.header}>Title</Text>
    <TextInput style={styles.titleInput} placeholder="Insert media title" placeholderTextColor="#D9D9D9" value={title} onChangeText={setTitle}/>

    <Text style={styles.header}>Score</Text>
    <View style={{ flexDirection: 'row'}}>
      {[...Array(5)].map((_, i) => {
        let iconName;
        if (i < score) {
           iconName = 'star';
         } else {
           iconName = 'star-outline';
        }
        return (
          <TouchableOpacity key={i} onPress={() => setScore(i + 1)}>
            <Ionicons
              name={iconName}
              size={50}
              color="#fff"
            />
          </TouchableOpacity>
         );
      })}
    </View>

    <Text style={styles.header}>Status</Text>
    <View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {statusArray.map((status) => (
          <TouchableOpacity
            key={status}
            style={[styles.statusButton,selectedStatus === status && styles.selectedStatusButton, {borderColor: getStatusColor(status)}]} onPress={() => setSelectedStatus(status)}>
            <Text style={{color: getStatusColor(status) }}>{status}</Text>
          </TouchableOpacity>
        ))}
    </ScrollView>
    </View>

    <Text style={styles.header}>Write a Review</Text>
    <TextInput style={[styles.reviewInput]} placeholder="Insert review text" placeholderTextColor="#D9D9D9" multiline value={review} onChangeText={setReview}/>
      
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Done</Text>
    </TouchableOpacity>
    </View>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case 'Consumed': return '#A3FFE6';
    case 'Consuming': return '#F4FF78';
    case 'Dropped': return '#FF554A';
    default: return '#AEAEAE';
  }
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
  titleInput: {
    backgroundColor: '#464646',
    color: '#fff',
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
  },
  reviewInput: {
    backgroundColor: '#464646',
    color: '#fff',
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    height: 160,
    textAlignVertical: 'top',
  },
  statusButton: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 10,
  },
  selectedStatusButton: {
    backgroundColor: '#1D1D1D',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#1D1D1D',
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});