import React, { useContext } from "react";
import { Text, StyleSheet, FlatList, Button, View } from 'react-native';
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = () => {

    const {state, addBlogPost} = useContext(Context);

    return (
        <>
            <Button title="Add Post" onPress={addBlogPost} />
            <FlatList
                data={state} 
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.row}>
                            <Text style={styles.title}>{ item.title }</Text>
                            <Feather name="trash" style={styles.icon}/>
                        </View>
                    )
                }}
            />
        </>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'grey'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }    
});

export default IndexScreen;