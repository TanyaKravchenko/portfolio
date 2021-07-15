import React from 'react';
import style from './RemoteWork.module.css';
import styleContainer from "../common/styles/Container.module.css";

function RemoteWork() {
    return (
        <div className={style.remoteWorkBlock}>
            <div className={`${styleContainer.container} ${style.remoteWorkContainer}`}>
                <h2 className={style.title}>I will consider options for remote work</h2>
                <div className={`${styleContainer.allButtons} ${style.works}`}>
                    <button>hire me</button>
                </div>
            </div>
        </div>
    );
}

export default RemoteWork;