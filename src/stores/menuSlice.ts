import { SIZE_BAR_DATA } from '@config/sizeBarConfig';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INavLinkItem } from '@src/types/utils';
import { MENU_KEY } from './keys';

export type IMenuState = {
    menuData?: INavLinkItem[];
    menuActiveKey?: string;
    menuOpenKey?: string;
};

const initialState: IMenuState = {
    menuData: SIZE_BAR_DATA,
    menuActiveKey: SIZE_BAR_DATA.find((x) => x.key)?.key,
    menuOpenKey: SIZE_BAR_DATA.find((x) => x.key)?.key,
};

export const menuSlice = createSlice({
    name: MENU_KEY,
    initialState,
    reducers: {
        setState: (state, action: PayloadAction<IMenuState>) => {
            return { ...state, ...action.payload };
        },

        setMenuOpenKey: (state, action: PayloadAction<string>) => {
            return { ...state, menuOpenKey: action.payload || '' };
        },

        setMenuActiveKey: (state, action: PayloadAction<string>) => {
            return { ...state, menuActiveKey: action.payload || '' };
        },
    },
});

export const menuAction = menuSlice.actions;

const menuReducer = menuSlice.reducer;
export default menuReducer;
