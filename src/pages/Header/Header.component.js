import React from 'react';
import {useNavigate} from "react-router-dom";
import {PATHS} from "configs/routes.config";
import styles from './Header.module.scss';

import zimaPay from 'assets/images/zimapay.svg';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.header} onClick={() => navigate(PATHS.HOME)}>
            <div className={styles.header_logo}>
                <img className={styles.header_logo_svg} src={zimaPay} alt=""/>
                <span className={styles.header_logo_text}>Crypto</span>
            </div>
        </div>
    );
};

export {Header};