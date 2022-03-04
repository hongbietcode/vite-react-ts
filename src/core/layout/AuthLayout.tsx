import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout: FC = () => {
    return (
        <div>
            <div className="bg-red-400">
                <h1>AuthLayout</h1>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default AuthLayout;
