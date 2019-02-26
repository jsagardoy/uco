import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import {App} from './app';


ReactDOM.render(
    (
    <HashRouter>
        <App />
    </HashRouter>
        ),
    document.getElementById('root')
);

