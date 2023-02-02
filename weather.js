#!usr/bin/env node
import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printHelp, printSuccess, printError, printWeather } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';


const saveToken = async (token) => {
    if (!token.length) {
        printError('Не передан токен');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('Токен сохранен');
    } catch (e) {
        printError(e.message);
    }
};


const saveCity = async (city) => {
    if (!city.length) {
        printError('Не передан город');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city);
        printSuccess('Город сохранен');
    } catch (e) {
        printError(e.message);
    }
};


const getForecast = async () => {
    try {
        const weather = await getWeather();
        printWeather(weather, weather.current.condition.icon);
    } catch (e) {
        if (e?.response?.status == 400) {
            printError('Неверно указан город');
        } else if (e?.response?.status == 403) {
            printError('Неверно указан токен');
        } else {
            console.log(e);
        }
    }
}


const initCLI = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        printHelp();
    }
    if (args.s) {
        saveCity(args.s);
    }
    if (args.t) {
        saveToken(args.t)
    }
    getForecast();
};

initCLI();