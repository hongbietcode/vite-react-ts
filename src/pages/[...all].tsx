import JSON_DATA from '@src/assets/json';
import { Button } from 'antd';
import { FC } from 'react';
import Lottie from 'react-lottie';
import { Outlet, useNavigate } from 'react-router-dom';

const NotfoundPage: FC = () => {
    const navigate = useNavigate();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: JSON_DATA.ERROR_404,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div className="flex h-screen w-screen justify-center items-center flex-col">
            <Lottie options={defaultOptions} height={400} width={400} />

            <Button onClick={() => navigate('/')} type="primary">
                Đi về nhà
            </Button>
            <Outlet />
        </div>
    );
};

export default NotfoundPage;
