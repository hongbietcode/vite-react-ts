import { createSlice } from '@reduxjs/toolkit';
import { ERole } from '@src/types/enum';

type IUserState = {
    token?: string;
    role?: ERole;
    name?: string;
};

const initialState: IUserState = {};

export const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {},
});

export const layoutAction = layoutSlice.actions;
const layoutReducer = layoutSlice.reducer;

export default layoutReducer;
