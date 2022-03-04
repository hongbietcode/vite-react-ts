import { APP_ROUTERS, AUTH_ROUTERS } from '@config/routerConfig';
import SCREENS from '@src/screens';
import { FC, Suspense, useCallback } from 'react';
import AuthLayout from '../layout/AuthLayout';
import { BrowserRouter, Routes, Route, Link, Outlet, RouteObject } from 'react-router-dom';
import { useRoutes } from 'react-router';
import { IRouter } from '@src/types/utils';

type Props = {
    isLogin: boolean;
};

const RouterApp: FC<Props> = ({ isLogin }) => {
    const _getRoutes = useCallback((routers: IRouter[]) => {
        const _routes: RouteObject[] = [];

        const _children = routers.map<RouteObject>((route: IRouter) => {
            const SCREEN = SCREENS[route.page];

            return {
                path: route.path,
                element: (
                    <Suspense fallback={<div>loading...</div>}>
                        <SCREEN />
                    </Suspense>
                ),
            };
        });

        _routes.push({
            path: '/',
            element: <Layout />,
            children: _children,
        });

        return _routes;
    }, []);

    const routers = useRoutes(_getRoutes(AUTH_ROUTERS));

    console.log('routers', routers);

    return <div>{routers}</div>;
};

export default RouterApp;

function Layout() {
    return (
        <div>
            <h1>Welcome to the app!</h1>
            <nav>
                <Link to="login">login</Link> | <Link to="dashboard">Dashboard</Link>
            </nav>
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}
