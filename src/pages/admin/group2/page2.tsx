import authHOC from '@src/hoc/authHOC';
import { FC } from 'react';

const Page2: FC = () => {
    return (
        <div>
            <h1>Example</h1>
        </div>
    );
};

export default authHOC()(Page2);
