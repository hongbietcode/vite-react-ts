import AppRouter from '@core/router';
import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './stores';

import 'virtual:windi.css';

const App: React.FC = () => {
    const persistor = persistStore(store);

    return (
        <Provider store={store}>
            <PersistGate loading={<div>loading...</div>} persistor={persistor}>
                <AppRouter />
            </PersistGate>
        </Provider>
    );
};

export default App;
