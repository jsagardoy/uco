import axios from 'axios';
import https from 'https';
import {machines} from '../common';

export const getLogin = async login => {
  //const url = `https://localhost:4000/users/authenticate`;

  const route=`/users/authenticate`;
  const url=machines.PRO || machines.DEV;
  const newURL = `${url}${route}`
  try {
    console.log(login);
    let response = await axios.post(newURL, login, { httpsAgent: new https.Agent({ rejectUnauthorized: false }) });
    const newLogin = {
      ...login,
      token: response.data.token,
    };
    return newLogin;
  } catch (error) {
    return null;
  }
};

export const createUser = async login => {
  try {
    const route=`/users/register`;
    const url=machines.PRO || machines.DEV;
    const newURL = `${url}${route}`
    //const url = `https://localhost:4000/users/register`;
    await axios.post(newURL, login, { httpsAgent: new https.Agent({ rejectUnauthorized: false }) });
    const newLogin = {
      ...login,
      token: response.data.token,
    };
    return newLogin;
  } catch (error) {
    return null;
  }
};
