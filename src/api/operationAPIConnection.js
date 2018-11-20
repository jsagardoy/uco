import axios from 'axios';
import {OperationEntity} from '../model';

 export const  getOperations = async ()  =>{
    const url = 'http://localhost:4000/api/operations';
        const operations = await axios.get(url);
        return (operations.data); 
}



