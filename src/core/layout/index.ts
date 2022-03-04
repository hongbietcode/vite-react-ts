import AppLayout from './AppLayout';
import AuthLayout from './AuthLayout';

const LAYOUTS = {
    AdminLayout: AppLayout,
    AuthLayout: AuthLayout,
};

export default LAYOUTS;

export type ILayout = keyof typeof LAYOUTS;
