import { APP_CONFIG } from '@config/appConfig';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppDispatch, useAppSelector } from '@src/hooks/useAppDispatch';
import { layoutAction } from '@src/stores/core-reducer/layoutSlice';
import { INavLinkItem } from '@src/types/utils';
import clsx from 'clsx';
import { FC, useCallback } from 'react';
import MenuGroup from './MenuGroup';
import styles from './styles.module.scss';

const SideBar: FC = () => {
    const menuData = useAppSelector((state) => state.menu.menuData) || [];
    const sizeBarState = useAppSelector((state) => state.layout.sizeBarState);
    const dispath = useAppDispatch();

    const onChangeSizeBarState = useCallback(() => {
        dispath(layoutAction.changeSizeBarState());
    }, [dispath]);

    const _renderMenu = useCallback((data: INavLinkItem[]) => {
        return data.map((item) => <MenuGroup key={item.key} data={item} />);
    }, []);

    return (
        <section className={clsx(styles.sizeBar, { [styles.mini]: sizeBarState === 'collapse' })}>
            <div
                className="border-b border-white mb-4 border-opacity-30"
                style={{ height: APP_CONFIG.NAV_BAR_HEIGHT }}
            />
            <div className="p-[10px] flex-1 overflow-auto">{_renderMenu(menuData)}</div>
            <div
                style={{ height: 50 }}
                onClick={onChangeSizeBarState}
                className="border-t border-white border-opacity-30 flex items-center justify-center"
            >
                <FontAwesomeIcon icon={faExchangeAlt} />
            </div>
        </section>
    );
};

export default SideBar;
