import axios from 'axios';
import https from 'https';
import {machines} from '../common';

//const url = `http://localhost:4000`;
const url = `https://uco-back.herokuapp.com`;

export const getLogin = async login => {

  const route=`/users/authenticate`;

  const newURL = `${url}${route}`
  try {
    console.log(login);
    let response = await axios.post(newURL, login,  { httpsAgent: new https.Agent({ rejectUnauthorized: false }) } );
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
    const newURL = `${url}${route}`

    await axios.post(newURL, login,  { httpsAgent: new https.Agent({ rejectUnauthorized: false }) });
    const newLogin = {
      ...login,
      token: response.data.token,
    };
    return newLogin;
  } catch (error) {
    return null;
  }
};
