import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '4aec02179554c36aac514fe37604b18a',
        language: 'es-ES'
    }
});

export default movieDB;