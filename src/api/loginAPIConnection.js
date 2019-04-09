import axios from 'axios';
import https from 'https';

export const getLogin = async (login) => {

    const url = `https://localhost:4000/users/authenticate`;
    try{
        console.log(login);
        let response = await axios.post(url,login, {httpsAgent: new https.Agent({rejectUnauthorized: false})});
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
    try{
    const url =`https://localhost:4000/users/register`;
    await axios.post(url,login, {httpsAgent: new https.Agent({rejectUnauthorized: false})});
    const newLogin = {
        ...login,
        token:response.data.token
    }
    return newLogin;
}catch(error){
    return null;
}
}


