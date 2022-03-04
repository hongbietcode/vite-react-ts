import { ILayout } from '@src/core/layout';
import { IAppPage } from '@src/screens';

declare module 'react' {
    type ReactPage<P = any> = FC<P> & { layout?: ILayout };
}

type IRouter = {
    path: string;
    page: IAppPage;
    title: string;
    children?: Omit<IRouter, 'children'>[];
};
