import { APP_ROUTER_MAP } from '@core/router/routes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRouterMap } from '@src/types/utils';

type ILayoutState = {
    routerMap: IRouterMap;
    sizeBarState?: ISizeBarState;
};

const initialState: ILayoutState = {
    routerMap: APP_ROUTER_MAP,
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
