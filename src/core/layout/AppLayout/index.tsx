import NavBar from '@src/components/root/NavBar';
import SideBar from '@src/components/root/SizeBar';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './styles.module.scss';

const AppLayout: FC = () => {
    return (
        <section className={styles.layout}>
            <SideBar />
            <div className="flex flex-col flex-1 h-screen">
                <NavBar />
                <div className={styles.container}>
                    <Outlet />
                </div>
            </div>
        </section>
    );
};

export default AppLayout;
