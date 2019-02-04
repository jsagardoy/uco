import axios from 'axios';

 export const getOperations = async ()  =>{
    const url = 'http://localhost:4000/api/operations';
        const operations = await axios.get(url);
        return (operations.data); 
}

export const putOperation = async (data) =>{
    const url = 'http://localhost:4000/api/operation';
    await axios.put(url, data);
}

export const putPerson = async (id,data) =>{
    const url = `http://localhost:4000/api/operation/${id}`;
    await axios.put(url, data); 
}


