import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <Text>Enter Name:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => { setName(newValue) }}
            />
            <Text>{name}</Text>
            <Text>Enter Password:</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newPassword) => { setPassword(newPassword) }}
            />
            {(password.length > 0 && password.length < 6) ? <Text style={styles.error}>Password must be longer than 5 characters</Text> : null}
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        padding: 5,
        borderColor: 'black',
        borderWidth: 1
    },

    error: {
        color: 'red'
    }
});

export default TextScreen;

