import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const greeting = 'Hello MSP';  
    const color = { color: 'red' };
    const hello = <Text>Hello again MSP!</Text>;
    const gettingStarted = <Text style={styles.headerStyle}>Getting started with React Native</Text>;
    const myName = 'Henry'

    return (
        <View>
            <Text style={styles.textStyle}>This is the components screen</Text>
            <Text>{greeting}</Text>
            <Text>{color.color}</Text>
            {hello}
            {gettingStarted}
            <Text style={styles.subHeaderStyle}>My name is {myName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    headerStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;