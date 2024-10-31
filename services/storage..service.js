import {homedir} from 'os';
import {join, basename, dirname, extname, relative, isAbsolute, resolve, sep} from 'path';

const filePath = join(homedir(), 'weather-data.json');

const saveKayValue = (key, value) => {
    console.log(basename(filePath));
    console.log(dirname(filePath));
    console.log(extname(filePath));
    //console.log(relative(filePath), dirname(filePath));
    console.log(isAbsolute(filePath));
    console.log(resolve(filePath));
    console.log(sep);
};

export {saveKayValue}