import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    const searchApi = async () => {
        const response = await yelp.get('/search', {
            params: {
                term,
                location: "san jose",
                limit: 50
            }
        });
        setResults(response.data.businesses);
    }

    return (
        <View style={styles.background}>
            <SearchBar
                term={term}
                onTermChange={setTerm} 
                onTermSubmit={searchApi}
            />
            <Text>Search Screen</Text>
            <Text>We have found { results.length } results</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white'
    }
});

export default SearchScreen;