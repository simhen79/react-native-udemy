import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer ClcamShK2sl4i8US2a9i44bR-_aguDYlIcWn9mLKWD7BStpFXwz6Jz0Em0mPdoYRVACn01QEO5KHVdfPRkfBlKXVQyhWSpFTdCrQSAA1NiPAKh6G6IZIUMfX-wDwZXYx'
    }
});