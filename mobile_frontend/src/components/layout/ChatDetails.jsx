import React from 'react';
import { View, Text } from 'react-native';

export const ChatDetails = ({ route }) => {
  const { chatId } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}>
      <Text style={{color: '#fff'}}> Chat Details </Text>
    </View>
  );
};

export default ChatDetails;
