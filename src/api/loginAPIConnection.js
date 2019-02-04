import axios from 'axios';


export const getLogin = async (login) => {
    
    const url = `http://localhost:4000/users/authenticate`;
    
   const value= await axios.post(url,login);
    return value.data.token;
}

export const createUser = async (login) =>{
    const url =`http://localhost:4000/users/register`;
    await axios.post(url,login);
}


