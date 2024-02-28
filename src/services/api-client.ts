import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'fc889e4d11fd4aac8527a01c2d900101'
    }
});

