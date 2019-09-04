import * as React from 'react';
import decode from 'jwt-decode';
import { getLogin } from '../../api/loginAPIConnection';
import { toast } from 'react-toastify';
import { LoginEntity } from '../../model';

export default class AuthHelperMethods extends React.Component {
  // Initializing important variables

  public login = (token: string) => {
    this.setToken(token);
    return true;
  };

  public loggedIn = () => {
    // Checks if there is a saved token and it's still valid
    const token: string = this.getToken(); // Getting token from localstorage
    return !!token && !this.isTokenExpired(token); // handwaiving here
  };

  public isTokenExpired = (token: string) => {
    try {
      const decoded: any = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        // Checking if token is expired.
        return true;
      } else {
        return false;
      }
    } catch (err) {
      toast.error('expired check failed! Line 42: AuthService.js');
      return false;
    }
  };

  public setToken = (idToken: string) => {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);
  };

  public getToken = () => {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  };

  public logout = async () => {
    if (this.loggedIn()) {
      // Clear user token and profile data from localStorage
      localStorage.removeItem('id_token');
    }
  };

  public getConfirm = () => {
    // Using jwt-decode npm package to decode the token
    const answer = decode(this.getToken());
    return answer;
  };

  public fetch = (url: string, options: any) => {
    // performs api calls sending the required authentication headers
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    // Setting Authorization header
    // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
    if (this.loggedIn()) {
      headers['Authorization'] = 'Bearer ' + this.getToken();
    }

    return fetch(url, {
      headers,
      ...options,
    })
      .then(this._checkStatus)
      .then(response => response.json());
  };

  public _checkStatus = response => {
    // raises an error in case response status is not a success
    if (response.status >= 200 && response.status < 300) {
      // Success status lies between 200 to 300
      return response;
    } else {
      let error: Error = new Error(response.statusText);
      error.message = response;
      throw error;
    }
  };
}
