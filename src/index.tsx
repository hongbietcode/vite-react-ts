/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import ReactDOM from 'react-dom';
import App from '@src/App';
import { HashRouter } from 'react-router-dom';

import './index.scss';

if (process.env.NODE_ENV === 'production') {
    console.log = (...args) => {};
}

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
