import NavBar from '@core/components/NavBar';
import SideBar from '@core/components/SizeBar';
import { FC, useEffect } from 'react';
import { useLocation } from 'react-use';
import styles from './styles.module.scss';

const AdminLayout: FC = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        console.log(location);
    }, [location]);

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
