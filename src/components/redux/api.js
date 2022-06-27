import axios from 'axios';

export const loadApi = async (arg) =>
await axios.get(`https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=E
N&amount=10`);