#!/use/bin/env node
import { getArgs } from "./helper/args.js";
import { printError, printSuccess, printHelp } from "./services/log.service.js";

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
        
    }



};
initCLI();
