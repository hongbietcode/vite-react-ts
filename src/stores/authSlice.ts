import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ERole } from '@src/types/enum';
import { AUTH_KEY } from './keys';

export type IAuthState = {
    token?: string;
    role?: ERole;
};

const initialState: IAuthState = {
    token: 'hello',
};

export const authSlice = createSlice({
    name: AUTH_KEY,
    initialState,
    reducers: {
        setState: (state, action: PayloadAction<IAuthState>) => {
            return { ...state, ...action.payload };
        },
    },
});

export const authAction = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
