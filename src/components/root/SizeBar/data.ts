import { faBars } from '@fortawesome/free-solid-svg-icons';
import { INavLinkItem } from '@src/types/utils';

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
