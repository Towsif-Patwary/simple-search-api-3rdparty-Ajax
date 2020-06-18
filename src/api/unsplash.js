import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID gvtLNotJGVZ7qpaUr_uVGlNqdBhe_pKfp3EYCmmRK3w'
    }
});