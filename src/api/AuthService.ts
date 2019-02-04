import * as React from 'react';
import decode from 'jwt-decode';
import { RouteComponentProps } from 'react-router';


interface State {
    domain:string;
}

export default class AuthService extends React.Component<RouteComponentProps<any>, State>{

    constructor(props){
        super(props);
        this.state={domain:this.state.domain || 'http://localhost:8080'}
    }

    login = (username:string, password:string) =>{
        return this.fetch (`${this.state.domain}/login`,{
                method: 'POST',
                body:JSON.stringify({
                    username,
                    password
                })
        }).then(res => {
            this.setToken(res.getToken);
            return Promise.resolve(res);
        })
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
    logout = () => {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
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

    fetch = (url:string, options) => {
        // performs api calls sending the required authentication headers
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        // Setting Authorization header
        // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
        if (this.loggedIn()) {
            headers['Authorization'] = 'Bearer ' + this.getToken()
        }

        return fetch(url, {
            headers,
            ...options
        })
            .then(this._checkStatus)
            .then(response => response.json())
    }
}