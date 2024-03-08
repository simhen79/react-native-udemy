import React from "react";
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.parentStyle}>
            <View style={ styles.viewOneStyle } />
            <View style={ styles.viewThreeStyle } />
            <View style={ styles.viewTwoStyle } />
        </View>
    )
}

const styles = StyleSheet.create({
    parentStyle: {
        borderColor: 'black',
        height: 150,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewOneStyle: {
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'red',
        height: 75,
        width: 75,
        alignItems: 'flex-start',
    },
    viewTwoStyle: {
        borderWidth: 1,
        borderColor: 'purple',
        backgroundColor: 'purple',
        height: 75,
        width: 75,
        alignItems: 'flex-end'
    },
    viewThreeStyle: {
        borderWidth: 1,
        borderColor: 'green',
        backgroundColor: 'green',
        height: 75,
        width: 75,
        top: 75,
    }
});

export default BoxScreen;