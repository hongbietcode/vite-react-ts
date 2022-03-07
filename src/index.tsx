import React from 'react';
import ReactDOM from 'react-dom';
import App from '@src/App';
import { HashRouter } from 'react-router-dom';

import './index.scss';

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
