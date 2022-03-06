import AppLayout from './AppLayout';

const LAYOUTS = {
    AppLayout: AppLayout,
};

export default LAYOUTS;

export type ILayout = keyof typeof LAYOUTS;
