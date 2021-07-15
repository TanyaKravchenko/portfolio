import React from 'react';
import style from './Contact.module.css';
import styleContainer from "../common/styles/Container.module.css";

function Contact() {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <h2 className={style.title}>Contact</h2>
                <form className={style.contactForm}>
                    <input type={'text'}/>
                    <input type={'text'}/>
                    <textarea></textarea>
                </form>
                <div className={`${styleContainer.allButtons} ${style.contactButton}`}>
                    <button>send</button>
                </div>
            </div>
        </div>
    );
}

export default Contact;