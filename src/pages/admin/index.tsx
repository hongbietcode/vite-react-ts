import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const HomePage: FC = () => {
    return (
        <div>
            <h1>HOME PAPGE</h1>
            <Outlet />
        </div>
    );
};

export default HomePage;
