import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { APP_MENU_DATA } from '@src/components/root/SizeBar/data';
import { INavLinkItem } from '@src/types/utils';

type IMenuState = {
    menuData?: INavLinkItem[];
    menuActiveKey?: string;
    menuOpenKey?: string;
};

const initialState: IMenuState = {
    menuData: APP_MENU_DATA,
    menuActiveKey: APP_MENU_DATA.find((x) => x.key)?.key,
    menuOpenKey: APP_MENU_DATA.find((x) => x.key)?.key,
};

export const menuSlice = createSlice({
    name: 'layout',
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
