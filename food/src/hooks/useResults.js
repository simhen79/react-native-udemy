import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    term: searchTerm,
                    location: "san jose",
                    limit: 50,
                    price: "1,2,3,4",
                }
            });
            setErrorMessage('');
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    }

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
};