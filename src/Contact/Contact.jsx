import React from 'react';
import style from './Contact.module.css';
import styleContainer from "../common/styles/Container.module.css";

function Contact() {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <h2 className={style.title}>Contact</h2>
                <div className={style.works}>
                    <input />
                </div>
                <div className={style.works}>
                    <input />
                </div>
                <div className={style.works}>
                    <input />
                </div>
                <div className={`${styleContainer.allButtons} ${style.works}`}>
                    <button>send</button>
                </div>
            </div>
        </div>
    );
}

export default Contact;