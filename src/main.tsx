import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { App } from './app';
import dotenv from 'dotenv';

dotenv.config();

ReactDOM.render(
    (
        <HashRouter>
            <App />
        </HashRouter>
    ),
    document.getElementById('root')
);

