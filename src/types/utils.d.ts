import { IconProp } from '@fortawesome/fontawesome-svg-core';

type INavLinkItem = {
    key: string;
    title: string;
    path?: string;
    icon?: IconProp;
    children?: Omit<INavLinkItem, 'children'>[];
};

declare module 'react-router-dom' {
    interface RouteObject {
        meta?: {
            auth: boolean;
            role: string;
        };
    }
}
