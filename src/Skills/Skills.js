import React from 'react';
import style from './Skills.module.css';
import styleContainer from './../common/styles/Container.module.css';
import Skill from "./Skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'Alias at, corporis cupiditate dolor dolorem, ex excepturi hic itaque iure labore molestias pariatur quaerat quo ratione sequi sint suscipit temporibus voluptatum?'}/>
                    <Skill title={'React'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at, corporis cupiditate dolor dolorem, ex excepturi hic itaque iure labore molestias pariatur quaerat quo ratione sequi sint suscipit temporibus voluptatum?'}/>
                    <Skill title={'CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at, corporis cupiditate dolor dolorem, ex excepturi hic itaque iure labore molestias pariatur quaerat quo ratione sequi sint suscipit temporibus voluptatum?Alias at, corporis cupiditate dolor dolorem, ex excepturi hic itaque iure labore molestias pariatur quaerat quo ratione sequi sint suscipit temporibus voluptatum?'}/>
                </div>
            </div>

        </div>
    );
}

export default Skills;