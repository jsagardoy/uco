import axios, {AxiosPromise} from 'axios';


export const getLogin = async (login) => {
    
    const url = `http://localhost:4000/users/authenticate`;
    
     return await axios.post(url,login).then((response)=>{
        
         const newLogin={
             ...login,
            token:response.data.token
        }
         return newLogin; 
        
        });
}

export const createUser = async (login) =>{
    const url =`http://localhost:4000/users/register`;
    await axios.post(url,login);
}


