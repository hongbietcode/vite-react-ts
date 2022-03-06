import NavBar from '@src/components/root/NavBar';
import SideBar from '@src/components/root/SizeBar';
import { FC } from 'react';
import styles from './styles.module.scss';

const AdminLayout: FC = ({ children }) => {
    return (
        <section className={styles.layout}>
            <SideBar />
            <div className="flex flex-col flex-1 h-screen">
                <NavBar />
                <div className={styles.container}>{children}</div>
            </div>
        </section>
    );
};

export default AdminLayout;
