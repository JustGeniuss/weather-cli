import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";
import axios from "axios";



export const getIcon = (icon) => {
    switch (icon.split("/").at(-1)) {
        case '113.png':
            return '☀️';
        case '116.png':
            return '🌤️';
        case '122.png':
            return '☁️';
        case '11':
            return '☁️';
        case '296.png':
            return '🌧️';
        case '302.png':
            return '🌦️';
        case '11':
            return '🌩️';
        case '326.png':
            return '❄️';
        case '338.png':
            return '❄️';
        case '332.png':
            return '❄️';
        case '143.png':
            return '🌫️';
    }
};




export const getWeather = async () => {

    const token = await getKeyValue(TOKEN_DICTIONARY.token);
    if (!token) {
        throw new Error('Не задан ключ API, задайте его через команду -t [API_KEY]')
    }
    const city = await getKeyValue(TOKEN_DICTIONARY.city);
    if (!city) {
        throw new Error('Не задан город, задайте его через команду -s [CITY]')
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
