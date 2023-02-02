import chalk from 'chalk';
import dedent from 'dedent-js';
import { getIcon } from './api.service.js';


export const printError = (error) => {
    console.log(chalk.bgRed('ERROR') + " " + error)
};


export const printSuccess = (message) => {
    console.log(chalk.bgGreen(' SUCCESS ') + " " + message)
};

export const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan(' HELP ')}
        Без параметров - вывод погоды
        -s [CITY] - для установки города
        -h для вывода помощи
        -t [API-KEY] - для сохранения токена
        `
    )
};


export const printWeather = (res, icon) => {
    console.log(
        dedent`${chalk.bgYellow(' WEATHER ')} Погода в городе ${res.location.name}
        ${getIcon(icon) ?? ''} ${res.current.condition.text}
        Температура: ${res.current.temp_c} (ошущуается как ${res.current.feelslike_c})
        Влажность: ${res.current.humidity}
        Скорость ветра: ${res.current.wind_kph}
        `
    )
};