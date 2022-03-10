import { combineReducers } from '@reduxjs/toolkit';
import { PersistConfig, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authSlice';
import { AUTH_KEY, LAYOUT_KEY } from './keys';
import layoutReducer from './layoutSlice';
import menuReducer from './menuSlice';

const persistConfig: PersistConfig<ICombinedState> = {
    key: 'root',
    storage,
    timeout: 100,
    whitelist: [LAYOUT_KEY, AUTH_KEY],
};

const rootReducer = combineReducers({
    layout: layoutReducer,
    menu: menuReducer,
    auth: authReducer,
});
const reducers = persistReducer(persistConfig, rootReducer);
export default reducers;

type ICombinedState = ReturnType<typeof rootReducer>;
