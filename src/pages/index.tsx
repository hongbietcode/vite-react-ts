import RouterUtils from '@src/utils/RouterUtils';
import { FC, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

type LoginProps = {
    data?: string;
};

const HomePage: FC<LoginProps> = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const path = RouterUtils.trimPath(window.location.pathname);
        navigate(path || '/', { replace: true });
    }, [navigate]);

    return <Link to={'/admin'}>Go Admin</Link>;
};

export default HomePage;
