import {homedir} from 'os';
import {join, basename, dirname, extname, relative, isAbsolute, resolve, sep} from 'path';
import {writeFileSync, writeFile, promises} from 'fs';

const filePath = join(homedir(), 'weather-data.json');

const saveKayValue = async (key, value) => {
    let data = {};

    if(await isExist(filePath)){
        const file = await promises.readFile(filePath);
        data = JSON.parse(file);
    }

    data[key] = value;

    await promises.writeFile(filePath, JSON.stringify(data));
};

const getKeyValue = async (key) => {
    if(await isExist(filePath)){
        const file = await promises.readFile(filePath);
        const data = JSON.parse(file);
        return data[key];
    }

    return undefined;
};

// Check that the file is already exists
const isExist = async (path) => {
    try {
        await promises.stat(path);
        return true; 
    } catch (error) {
        return false;
    }
};

export {saveKayValue, getKeyValue}