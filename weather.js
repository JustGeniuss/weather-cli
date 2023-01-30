#!usr/bin/env node
import { getArgs } from './helpers/args.js';

const initCLI = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        // вывод help
    }
    if (args.s) {
        // Сохранить город
    }
    if (args.h) {
        // Сохранить токен
    }
    // Вывести токен
 
    console.log(args);
};

initCLI();