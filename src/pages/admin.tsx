import AdminLayout from '@core/layout/AdminLayout';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const AdminPage: FC = () => {
    return (
        <AdminLayout>
            <Outlet />
        </AdminLayout>
    );
};

export default AdminPage;
