import axios from 'axios';

export const getOperations = async () => {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');

  const url = 'https://localhost:4000/api/operations';
  const operations = await axios.get(url);
  return operations.data;
};

export const putOperation = async data => {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
  const url = 'https://localhost:4000/api/operation';
  await axios.put(url, data);
};

export const putPerson = async (id, data) => {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
  const url = `https://localhost:4000/api/operation/${id}`;
  await axios.put(url, data);
};
