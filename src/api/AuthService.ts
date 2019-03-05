/* import * as React from 'react';
import decode from 'jwt-decode';

interface State {
    domain:string;
}

export default class AuthService extends React.Component<{}, State>{

    constructor(props){
        super(props);
        this.state={domain:'https://localhost:4000'}
    }

    login = (token:string) =>{

        this.setToken(token);
        return true;
    }

    setToken = (idToken:string) => {
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken);
    }

    getToken = () => {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token');
    }

    loggedIn= () => {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken() // GEtting token from localstorage
        return !!token && !this.isTokenExpired(token) // handwaiving here
    }

    isTokenExpired = (token:string) => {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
                return true;
            }
            else
                return false;
        }
        catch (err) {
            return false;
        }
    }
    logout = async () => {
        if (this.loggedIn())
        // Clear user token and profile data from localStorage
            await localStorage.removeItem('id_token');
    }

    getProfile = () => {
        // Using jwt-decode npm package to decode the token
        return decode(this.getToken());
    }

    _checkStatus = (response) => {
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
            return response;
        } else {
            var error = new Error(response.statusText);

            error.message = response;
            throw error;
        }
    }
} */