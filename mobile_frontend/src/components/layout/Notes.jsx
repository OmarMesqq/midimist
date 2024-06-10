import { Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const Notes = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}>
      <Text style={{color: '#fff'}}> Notepad Screen </Text>
    </View>
  );
};

