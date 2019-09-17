import axios from 'axios';
import {machines} from '../common';

const route = `/api/operations`;
const url = `https://uco-back.herokuapp.com`;//`http://localhost:4000`;
const newURL = `${url}${route}`;

export const getOperations = async () => {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');


  const operations = await axios.get(newURL);
  return operations.data;
};

export const putOperation = async data => {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
  //const url = 'https://localhost:4000/api/operation';
  await axios.put(newURL, data);
};

export const putPerson = async (id, data) => {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
  const urlID = `${newURL}/${id}`;
  await axios.put(urlID, data);
};
