import LAYOUTS from '@core/layout';
import { IRouter, IRouterMap } from '@src/types/utils';
import RouterUtils from '@src/utils/RouterUtils';
import React, { FC, Fragment, Suspense } from 'react';
import { useRoutes } from 'react-router';
import { RouteObject } from 'react-router-dom';
import _loadash from 'lodash';
import { useEffect } from 'react';
import { useDeepCompareEffect } from 'react-use';
import { useAppDispatch } from '@src/hooks/useAppDispatch';
import { layoutAction } from '@src/store/reducers/layoutSlice';

const getArrRouterObject = (routers: IRouter[]): RouteObject[] => {
    return routers.map<RouteObject>((router: IRouter) => {
        const Element = typeof router.page == 'function' ? router.page() : router.page;
        const $$type = Element.$$typeof;

        switch ($$type) {
            case Symbol.for('react.element'):
                return {
                    ...router,
                    element: Element,
                    children: router.children ? getArrRouterObject(router.children) : undefined,
                };

            case Symbol.for('react.lazy'):
                return {
                    ...router,
                    path: RouterUtils.trimPath(router.path),
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <Element />
                        </Suspense>
                    ),
                    children: router.children ? getArrRouterObject(router.children) : undefined,
                };

            default:
                return {
                    ...router,
                    path: RouterUtils.trimPath(router.path),
                    element: <div>404</div>,
                    children: router.children ? getArrRouterObject(router.children) : undefined,
                };
        }
    });
};

const getRouterMap = (map: IRouterMap): RouteObject[] => {
    const data: RouteObject[] = [];
    const Layout = map.layout ? LAYOUTS[map.layout] : null;

    if (Layout) {
        data.push({
            index: map.routers?.length == 0,
            path: RouterUtils.trimPath(map.basePath) || '/',
            element: <Layout />,
            children: getArrRouterObject(map.routers),
        });
    } else {
        data.push(...getArrRouterObject(map.routers));
    }

    data.push({
        path: '*',
        element: <div>404</div>,
    });

    return data;
};

type AppRouterProps = {
    routerMap: IRouterMap;
};

const AppRouter: FC<AppRouterProps> = ({ children, routerMap }) => {
    const routers = useRoutes(getRouterMap(_loadash.cloneDeep(routerMap)));
    const dispath = useAppDispatch();

    useEffect(() => {
        if (routerMap) {
            dispath(layoutAction.setState({ routerMap: routerMap }));
        }
    }, [dispath, routerMap]);

    return (
        <Fragment>
            {routers}
            {children}
        </Fragment>
    );
};

export default AppRouter;
