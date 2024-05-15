import React, { useContext } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Divider } from '@rneui/themed';
import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {

    const { state } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    return (
        <View>
            <Text>{ blogPost.title }</Text>
            <Divider />
            <Text>{ blogPost.content }</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default ShowScreen;