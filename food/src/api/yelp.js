import axios from 'axios';
import { Yelp_API_KEY } from '@env';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer ${Yelp_API_KEY}`
    }
});