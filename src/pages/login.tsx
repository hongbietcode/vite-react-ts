import FormDemo from '@src/modules/admin/components/FormDemo';
import { FC } from 'react';

type LoginProps = {
    data?: string;
};

const LoginPage: FC<LoginProps> = () => {
    return <FormDemo />;
};

export default LoginPage;
