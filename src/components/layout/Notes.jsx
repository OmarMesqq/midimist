import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export const Notes = () => {
  const [selectedNote, setSelectedNote] = useState('Note 1');
  const [noteText, setNoteText] = useState({
    'Note 1': '',
    'Note 2': '',
    'Note 3': '',
    'Note 4': ''
  });

  const tabPressed = (note) => {
    setSelectedNote(note);
  };

  const textChange = (text) => {
    setNoteText({
      ...noteText,
      [selectedNote]: text
    });
  };

  const deletePressed = () => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete the note?',
      [
        {
          text: 'Nevermind'
        },
        {
          text: 'Delete',
          onPress: () => {
            setNoteText({
              ...noteText,
              [selectedNote]: ''
            });
          }
        }
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        {Object.keys(noteText).map((note) => (
          <TouchableOpacity
            key={note}
            style={[
              styles.tab,
              selectedNote === note && styles.selectedTab
            ]}
            onPress={() => tabPressed(note)}
          >
            <Text style={styles.tabText}>{note}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.noteContainer}>
        <TextInput
          style={styles.textInput}
          multiline
          value={noteText[selectedNote]}
          onChangeText={textChange}
          placeholder="Insert text here"
          placeholderTextColor='#fff'
        />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={deletePressed}>
          <Text style={styles.buttonText}>🗑️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 13,
    marginHorizontal: 9,
  },
  tab: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#1D1D1D',
    borderRadius: 10
  },
  selectedTab: {
    backgroundColor: '#3D3D3D',
  },
  tabText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  noteContainer: {
    flex: 1,
    backgroundColor: '#464646',
    marginHorizontal: 9,
    borderRadius: 10,
    padding: 10
  },
  textInput: {
    flex: 1,
    color: '#fff',
    padding: 5,
    fontSize: 16,
    height: 160,
    textAlignVertical: 'top',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginHorizontal: 9,
    marginVertical: 10,
    justifyContent: 'flex-end'
  },  
  button: {
    backgroundColor: '#282828',
    borderRadius: 10,
    padding: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default Notes;
