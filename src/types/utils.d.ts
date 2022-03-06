import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ILayout } from '@src/core/layout';

type IRouter = {
    title?: string;
    path?: string;
    index?: boolean;
    page: any;

    caseSensitive?: boolean;
    children?: IRouter[];
};

type IRouterMap = {
    layout?: ILayout;
    basePath?: string;
    routers: IRouter[];
};

type INavLinkItem = {
    key: string;
    title: string;
    path?: string;
    icon?: IconProp;
    children?: Omit<INavLinkItem, 'children'>[];
};
