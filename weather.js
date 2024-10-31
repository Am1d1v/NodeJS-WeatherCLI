#!/use/bin/env node
import { getArgs } from "./helper/args.js";
import { printError, printSuccess, printHelp } from "./services/log.service.js";
import { saveKayValue } from "./services/storage..service.js";


// Print token save result
const saveToken = async (token) => {
    try {
        saveKayValue('token', token);
        printSuccess('Token saved');
    } catch (error) {
     printError(error.message);
    }
    
};


const initCLI = () => {
    const args = getArgs(process.argv);

    // Help output
    if(args.h){
        printHelp();
    }

    // Save city
    if(args.s){
        
    }

    // Save token
    if(args.t){
       return saveToken(args.t);
    }



};
initCLI();
