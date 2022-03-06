// vite-env.d.ts
/// <reference types="vite-plugin-pages/client-react" />

import cloneDeep from 'lodash/cloneDeep';
import { FC, Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import routes from '~react-pages';

const getElement = (element: any) => {
    if (!element || (typeof element !== 'function' && typeof element !== 'object')) {
        return undefined;
    }
    const Element = typeof element === 'function' ? element() : element;

    const $$typeof = Element.$$typeof;

    switch ($$typeof) {
        case Symbol.for('react.element'):
            return Element;

        case Symbol.for('react.lazy'):
            return (
                <Suspense fallback={<div>loading...</div>}>
                    <Element />
                </Suspense>
            );
        default:
            return undefined;
    }
};

const getRouterData = (routers: RouteObject[]): RouteObject[] => {
    return routers.map<RouteObject>((route) => {
        const router = cloneDeep(route);
        router.element = getElement(router.element);
        route.children && (router.children = getRouterData(route.children));

        return router;
    });
};

const AppRouter: FC = () => {
    const _router = getRouterData(routes);
    return useRoutes(_router);
};

export default AppRouter;
