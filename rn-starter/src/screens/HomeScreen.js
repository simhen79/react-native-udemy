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
      <Button
        title="Counter Reducer Demo"
        onPress={() => {
          navigation.navigate("CounterReducer");
        }}
      />
       <Button
        title="Color Demo"
        onPress={() => {
          navigation.navigate("Color");
        }}
      />
       <Button
        title="Square Demo"
        onPress={() => {
          navigation.navigate("Square");
        }}
      />
       <Button
        title="Text Demo"
        onPress={() => {
          navigation.navigate("Text");
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

