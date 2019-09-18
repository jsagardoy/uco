import axios from 'axios';
import {machines} from '../common';

const url = `http://uco-back.herokuapp.com`;//`http://localhost:4000`;

export const getOperations = async () => {
  const route = `/api/operations`;
  const newURL = `${url}${route}`;
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
  const operations = await axios.get(newURL);
  return operations.data;
};

export const putOperation = async data => {
  const route = `/api/operation`;
  const newURL = `${url}${route}`;
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
  //const url = 'https://localhost:4000/api/operation';
  await axios.put(newURL, data);
};

export const putPerson = async (id, data) => {
  const route = `/api/operation`;
  const newURL = `${url}${route}`;
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
  const urlID = `${newURL}/${id}`;
  await axios.put(urlID, data);
};
