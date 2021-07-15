import React from 'react';
import style from './Work.module.css';
import img1 from './../../images/Grid-14-old-cunts.jpg'
import styleContainer from "../../common/styles/Container.module.css";

function Work(props) {
    return (
        <div className={style.work}>
            <div className={`${styleContainer.allButtons} ${style.workImg}`}>
                <button>view</button>
            </div>
            <div>
                <h3>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
}

export default Work;