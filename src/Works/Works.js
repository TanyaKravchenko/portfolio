import React from 'react';
import style from './Works.module.css';
import styleContainer from './../common/styles/Container.module.css';
import Work from "./Work/Work";

function Works() {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>My Works</h2>
                <div className={style.works}>
                    <Work title={'ProjectName'}
                          description={'Alias at, corporis cupiditate dolor dolorem, ex excepturi hic itaque iure labore molestias pariatur quaerat quo ratione sequi sint suscipit temporibus voluptatum?'}/>
                    <Work title={'NewProjectName'}
                          description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at, corporis cupiditate dolor dolorem, ex excepturi hic itaque iure labore molestias pariatur quaerat quo ratione sequi sint suscipit temporibus voluptatum?'}/>

                </div>
            </div>

        </div>
    );
}

export default Works;