import React from 'react';
import style from './Footer.module.css';
import styleContainer from "../common/styles/Container.module.css";

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Tatyana Kravchenko</h2>
                <div className={style.footerItems}>
                    <div className={style.footerItem}></div>
                    <div className={style.footerItem}></div>
                    <div className={style.footerItem}></div>
                    <div className={style.footerItem}></div>
                    <div className={style.footerItem}></div>
                    <div className={style.footerItem}></div>
                    <div className={style.footerItem}></div>
                </div>
            </div>
        </div>
    );
}

export default Footer;