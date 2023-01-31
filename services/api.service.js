import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";
import axios from "axios";

export const getWeather = async (city) => {

    const token = await getKeyValue(TOKEN_DICTIONARY.token);
    if (!token) {
        throw new Error('Не задан ключ API, задайте его через команду -t [API_KEY]')
    }
    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: { q: city, lang: 'ru' },
        headers: {
            'X-RapidAPI-Key': token,
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    const { data } = await axios.request(options)


    return data;

}
