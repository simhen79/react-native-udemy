import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    //console.log(results[0]);

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            //console.log(result.price);
            return result.price === price;
        });
    }
    
    return (
        <View style={styles.background}>
            <SearchBar
                term={term}
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text>: null}
            <Text>We have found { results.length } results</Text>
            <ResultsList title="Cost Effective" results={ filterResultsByPrice('$') } />
            <ResultsList title="Bit Pricier" results={ filterResultsByPrice('$$') } />
            <ResultsList title="Big Spender" results={ filterResultsByPrice('$$$') } />
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