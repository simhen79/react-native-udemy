import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {

    const id = navigation.getParam('id');

    const { state, updateBlogPost } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === id);

    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    return (
        <View>
            <Text style={styles.label}>New Title</Text>
            <TextInput value={title} onChangeText={(text) => setTitle(text)} style={styles.input}/>
            <Text style={styles.label}>New Content</Text>
            <TextInput value={content} onChangeText={(content) => setContent(content)} style={styles.input}/>
            <Button title="Update Post" onPress={() => {
                updateBlogPost(id, title, content, () => {
                    navigation.navigate('Show', { id });
                });                
            }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default EditScreen;