import React from 'react';

const SCREENS = {
    LoginPage: React.lazy(() => import('./login')),
    HomePage: React.lazy(() => import('./home')),
};

export default SCREENS;

export type IAppPage = keyof typeof SCREENS;
