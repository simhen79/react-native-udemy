import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
    // state === { count: number }
    // action === { type: string ( increase || decrease ), payload: number }
    switch (action.type) {
        case 'increase':
            return {...state, count: state.count + action.payload};
        case 'decrease':
            return {...state, count: state.count - action.payload};    
        default:
            return state;      
    }
}

const CounterReducerScreen = () => {
    
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    const { count } = state;

    return (
        <View>
            <Button title="Increase" onPress={() => dispatch({type: 'increase', payload: 1})}/>
            <Button title="Decrease" onPress={() => dispatch({type: 'decrease', payload: 1})}/>
            <Text>Current Count: { count }</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterReducerScreen;

