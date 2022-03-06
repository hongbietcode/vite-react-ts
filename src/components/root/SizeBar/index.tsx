import { APP_CONFIG } from '@config/appConfig';
import { useAppSelector } from '@src/hooks/useAppDispatch';
import { INavLinkItem } from '@src/types/utils';
import clsx from 'clsx';
import { FC, useCallback, useState } from 'react';
import MenuGroup from './MenuGroup';

import styles from './styles.module.scss';

const SideBar: FC = () => {
    const menuData = useAppSelector((state) => state.menu.menuData) || [];
    const [mini, setMini] = useState(false);

    const _renderMenu = useCallback((data: INavLinkItem[]) => {
        return data.map((item) => <MenuGroup key={item.key} data={item} />);
    }, []);

    return (
        <section className={clsx(styles.sizeBar, { [styles.mini]: mini })}>
            <div
                className="border-b border-white mb-4 border-opacity-30"
                style={{ height: APP_CONFIG.NAV_BAR_HEIGHT }}
            />
            <div className="p-[10px] flex-1 overflow-auto">{_renderMenu(menuData)}</div>
            <div onClick={() => setMini((c) => !c)} className="border-t border-white mb-4 border-opacity-30 h-[50px]">
                adad
            </div>
        </section>
    );
};

export default SideBar;
