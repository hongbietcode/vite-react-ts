import { combineReducers } from '@reduxjs/toolkit';
import { PersistConfig, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import layoutReducer from './core-reducer/layoutSlice';
import menuReducer from './core-reducer/menuSlice';

const persistConfig: PersistConfig<ICombinedState> = {
    key: 'root',
    storage,
    timeout: 100,
    whitelist: ['layout'],
};

const rootReducer = combineReducers({
    layout: layoutReducer,
    menu: menuReducer,
});
const reducers = persistReducer(persistConfig, rootReducer);

export default reducers;

type ICombinedState = ReturnType<typeof rootReducer>;
