import axios from 'axios';
import {OperationEntity} from '../model';

const errorHandler = (err) => {console.log(err)}

export const getOperations = ()  =>{
    const url = 'http://localhost:4000';
    let operations = [];
    axios.get('url')
        .then ( (result) =>{
            operations.push(result.data);
            operations;
        })
        .catch(errorHandler);
    return operations;
};




