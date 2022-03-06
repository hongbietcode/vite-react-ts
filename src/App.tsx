import { APP_ROUTER_MAP } from '@core/router/routes';
import AppRouter from '@src/core/router';
import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './store';

const App: React.FC = () => {
    const persistor = persistStore(store);

    return (
        <Provider store={store}>
            <PersistGate loading={<div>loading...</div>} persistor={persistor}>
                <AppRouter routerMap={APP_ROUTER_MAP} />
            </PersistGate>
        </Provider>
    );
};

export default App;
