var base64 = require('base-64');
export const base64ToString=(input:string):string=>{

    if(!input.includes('http')){
        return atob(encodeURIComponent(input));
    }else
    //already reagular string
    return input;
};

export const stringToBase64 = (input:string):string=>{
    
    if(input.includes('http')||input.includes('data:')){
        //already in base 64
        return(input);
    }else
        //return btoa(encodeURIComponent(input))
        return base64.encode(input);
};

