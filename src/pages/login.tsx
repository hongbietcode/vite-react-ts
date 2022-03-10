import { IAuthState } from '@stores/authSlice';
import { Button } from 'antd';
import { FC } from 'react';

type LoginProps = {
    data?: string;
};

const LoginPage: FC<LoginProps & IAuthState> = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <Button type="primary">Đăng nhập</Button>
        </div>
    );
};

export default LoginPage;
