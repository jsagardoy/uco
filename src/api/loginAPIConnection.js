import * as React from 'react';
import axios, {AxiosPromise} from 'axios';
export const getLogin = async (login) => {

    const url = `http://localhost:4000/users/authenticate`;
    try{
        console.log(login);
        let response = await axios.post(url,login);
        const newLogin = {
            ...login,
            token:response.data.token
        }
        return newLogin;
    }catch(error){
        return null;
    }
}

export const createUser = async (login) =>{
    const url =`http://localhost:4000/users/register`;
    await axios.post(url,login);
}


