import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ILayoutState = {
    sizeBarState?: ISizeBarState;
};

const initialState: ILayoutState = {
    sizeBarState: 'collapse',
};

export const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        setState: (state, action: PayloadAction<ILayoutState>) => {
            return { ...state, ...action.payload };
        },
        changeSizeBarState: (state) => {
            if (state.sizeBarState === 'expan') {
                return { ...state, sizeBarState: 'collapse' };
            }
            return { ...state, sizeBarState: 'expan' };
        },
    },
});

export const layoutAction = layoutSlice.actions;
const layoutReducer = layoutSlice.reducer;

export default layoutReducer;
