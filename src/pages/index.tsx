import { Input } from 'antd';
import { FC } from 'react';

type LoginProps = {
    data?: string;
};

const HomePage: FC<LoginProps> = () => {
    return (
        <div style={{ height: 10000 }}>
            <Input />
            <h1>Login</h1>
        </div>
    );
};

export default HomePage;
