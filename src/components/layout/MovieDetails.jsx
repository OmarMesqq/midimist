import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const MovieDetails = ({ route }) => {
  const { MovieId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detalhes do chat {MovieId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 20, // Adiciona padding para garantir espaço ao redor do texto
  },
  text: {
    color: '#fff',
    fontSize: 20,
    width: '100%', // Garante que o texto utilize a largura total disponível
    textAlign: 'center', // Centraliza o texto
  }
});

export default MovieDetails;
