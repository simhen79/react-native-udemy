import React, { useContext } from "react";
import { StyleSheet } from 'react-native';
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
    const { state, updateBlogPost } = useContext(Context);

    const id = navigation.getParam('id');

    const blogPost = state.find((blogPost) => blogPost.id === id);

    return <BlogPostForm 
        onSubmit={(title, content) => {
            updateBlogPost(id, title, content, () => navigation.navigate('Show', { id }));
        }} 
        blogPost={ blogPost }
    />
}

const styles = StyleSheet.create({});

export default EditScreen;