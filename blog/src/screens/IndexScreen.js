import React, { useContext, useEffect } from "react";
import { Text, StyleSheet, FlatList, Button, View, TouchableOpacity } from 'react-native';
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
    const {state, deleteBlogPost, getBlogPosts} = useContext(Context);

    useEffect(() => { 
        getBlogPosts();
        
        const listener = navigation.addListener('didFocus', () => {
            getBlogPosts();
        });

        // This function is invoked when the component is completely removed and not just hidden
        return () => {
            listener.remove();
        };

    }, []);

    return (
        <>
            <Button title="Add Post" onPress={() => { navigation.navigate('Create')} } />
            <FlatList
                data={state} 
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{ item.title } - { item.id }</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather name="trash" style={styles.icon} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </>
    );
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')} >
                <Feather name="plus" size={30} />
            </TouchableOpacity>
        ),
    }
};

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