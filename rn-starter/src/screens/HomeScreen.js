import React from "react";
import { StyleSheet, View, Button } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button 
        title="Components Demo" 
        onPress={() => {
          navigation.navigate("Components");
        }}
      />
      <Button
        title="List Demo"
        onPress={() => {
          navigation.navigate("List");
        }}
      />
      <Button
        title="Image Demo"
        onPress={() => {
          navigation.navigate("Image");
        }}
      />
      <Button
        title="Counter Demo"
        onPress={() => {
          navigation.navigate("Counter");
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

