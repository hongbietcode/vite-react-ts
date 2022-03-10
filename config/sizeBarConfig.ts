import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export class NavLinkItem {
    key: string;
    title: string;
    path?: string;
    icon?: IconProp;
    children?: NavLinkItem[];
    constructor(item: NavLinkItem) {
        this.key = item.key;
        this.title = item.title;
        this.path = item.path;
        this.icon = item.icon;
        this.children = item.children?.map((x) => {
            if (x.children) delete x.children;
            x.key = item.key + '__' + x.key;
            return new NavLinkItem(x);
        });
    }
}

export const SIZE_BAR_DATA: NavLinkItem[] = [
    new NavLinkItem({
        key: 'g-1',
        title: 'Group 1',
        icon: faBars,
        children: [
            new NavLinkItem({
                key: 'i-1',
                title: 'Item 1',
                path: '/admin/group1/page1',
            }),
            new NavLinkItem({
                key: 'i-2',
                title: 'Item 2',
                path: '/admin/group1/page2',
            }),
        ],
    }),
    new NavLinkItem({
        key: 'g-2',
        title: 'Group 2',
        icon: faBars,
        children: [
            new NavLinkItem({
                key: 'i-1',
                title: 'Item 1',
                path: '/admin/group2/page1',
            }),
            new NavLinkItem({
                key: 'i-2',
                title: 'Item 2',
                path: '/admin/group2/page2',
            }),
        ],
    }),
];

console.log('SIZE_BAR_DATA', SIZE_BAR_DATA);
