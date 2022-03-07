import { Input } from 'antd';
import { FC } from 'react';
import { Link } from 'react-router-dom';

type LoginProps = {
    data?: string;
};

const HomePage: FC<LoginProps> = () => {
    return <Link to={'/admin'}>Go Admin</Link>;
};

export default HomePage;
