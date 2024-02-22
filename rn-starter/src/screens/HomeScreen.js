import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>MSP</Text>
      <Button 
        title="Go to components demo" 
        onPress={() => {
          navigation.navigate("Components");
        }}
      />
      <Button
        title="Go to list demo"
        onPress={() => {
          navigation.navigate("List");
        }}
      />
      <Button
        title="Go to image demo"
        onPress={() => {
          navigation.navigate("Image");
        }}
      />
    </View>    
  );
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

