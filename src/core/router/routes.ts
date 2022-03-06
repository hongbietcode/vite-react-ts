import { faBars } from '@fortawesome/free-solid-svg-icons';
import { INavLinkItem, IRouterMap } from '@src/types/utils';
import React from 'react';

export const APP_ROUTER_MAP: IRouterMap = {
    layout: 'AppLayout',
    basePath: '/',
    routers: [
        {
            index: true,
            path: 'g-1-i-1',
            page: React.lazy(() => import('@pages/login')),
        },
    ],
};

export const APP_MENU_DATA: INavLinkItem[] = [
    {
        key: 'g-1',
        title: 'Group 1',
        icon: faBars,
        children: [
            {
                key: 'g-1-i-1',
                title: 'Item 1',
                path: '/g-1-i-1',
            },
            {
                key: 'g-1-i-2',
                title: 'Item 2',
                path: '/g-1-i-2',
            },
        ],
    },
    {
        key: 'g-2',
        title: 'Group 2',
        icon: faBars,
        path: '/',
    },
];
