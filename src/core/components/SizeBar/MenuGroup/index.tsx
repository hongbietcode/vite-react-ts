import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppDispatch, useAppSelector } from '@src/hooks/useAppDispatch';
import { menuAction } from '@src/stores/core-reducer/menuSlice';
import { INavLinkItem } from '@src/types/utils';
import { AnimatePresence, motion } from 'framer-motion';

import clsx from 'clsx';
import React, { FC, Fragment, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';
import MenuItem from '../MenuItem';

type MenuGroupProps = {
    data: INavLinkItem;
};

type ChildrenGroupProps = {
    data: Omit<INavLinkItem, 'children'>[];
    open?: boolean;
};

const MENU_ITEM_HEIGHT = 48;

const ChildrenGroup: FC<ChildrenGroupProps> = ({ data = [], open }) => {
    const sizeBarState = useAppSelector((state) => state.layout.sizeBarState);

    if (data.length > 0) {
        return (
            <AnimatePresence>
                {open && sizeBarState === 'expan' && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                            opacity: 1,
                            height: MENU_ITEM_HEIGHT * data.length,
                            marginTop: '0.5rem',
                            marginBottom: '0.5rem',
                        }}
                        exit={{
                            overflow: 'hidden',
                            height: 0,
                            marginTop: 0,
                            marginBottom: 0,
                        }}
                        className={styles.childrenGroup}
                    >
                        {data.map((item) => (
                            <MenuItem height={MENU_ITEM_HEIGHT} data={item} key={item.key} />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        );
    }

    return <Fragment />;
};

const MenuGroup: FC<MenuGroupProps> = ({ data }) => {
    const { key, icon, path, children, title } = data || {};

    const sizeBarState = useAppSelector((state) => state.layout.sizeBarState);
    const activeKey = useAppSelector((state) => state.menu.menuActiveKey);
    const openKey = useAppSelector((state) => state.menu.menuOpenKey);
    const dispath = useAppDispatch();

    const isDispathActive = useRef(false);

    const onChangeOpenState = () => {
        if (sizeBarState === 'expan') {
            dispath(menuAction.setMenuOpenKey(openKey === key ? '' : key));
        }
    };

    const _getMenuGropuClassName = (params?: any) => {
        const { isActive } = params || {};
        if (children && children.length > 0) {
            const _childreKey = children.map((item) => item.key);
            return clsx(styles.menuGroup, {
                [styles.active]: !!_childreKey.find((x) => x === activeKey),
                [styles.open]: openKey === key,
                [styles.mini]: sizeBarState === 'collapse',
            });
        }

        if (path) {
            if (isDispathActive.current === false && isActive) {
                isDispathActive.current = true;
                dispath(menuAction.setMenuActiveKey(isActive ? key : ''));
            }
            return clsx(styles.menuGroup, {
                [styles.active]: isActive,
                [styles.open]: openKey === key,
                [styles.mini]: sizeBarState === 'collapse',
            });
        }

        return clsx(styles.menuGroup, {
            [styles.open]: openKey === key,
            [styles.mini]: sizeBarState === 'collapse',
        });
    };

    if (children && children.length > 0) {
        return (
            <Fragment>
                <div onClick={onChangeOpenState} className={_getMenuGropuClassName()}>
                    <div className={styles.icon}>
                        <FontAwesomeIcon icon={icon || faBars} />
                    </div>
                    <div className={styles.title}>
                        <span>{title}</span>
                    </div>
                    <div className={styles.dropIcon}>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                </div>

                <ChildrenGroup open={openKey === key} data={children} />
            </Fragment>
        );
    }

    if (path) {
        return (
            <NavLink to={path} onClick={onChangeOpenState} className={_getMenuGropuClassName}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={icon || faBars} />
                </div>
                <div className={styles.title}>
                    <span>{title}</span>
                </div>
            </NavLink>
        );
    }

    return <Fragment />;
};

export default MenuGroup;
