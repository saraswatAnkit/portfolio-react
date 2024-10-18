import React from 'react'
import styles from './SkillsStyles.module.css'
import SkillList from '../../common/SkillList'
import HTMLIcon from '../../assets/images/HTML-icon.png'
import CSSIcon from '../../assets/images/CSSIcon.png'
import JavaScriptIcon from '../../assets/images/JavaScriptIcon.webp'
import NodeIcon from '../../assets/images/NodeIcon.png'
import ReactIcon from '../../assets/images/ReactIcon.webp'
import AngularIcon from '../../assets/images/AngularIcon.png'
import VueIcon from '../../assets/images/VueIcon.png'
import TailwindIcon from '../../assets/images/TailwindIcon.png'
import ReduxIcon from '../../assets/images/ReducIcon.webp'
import WebpackIcon from '../../assets/images/WebpackIcon.png'
import GitIcon from '../../assets/images/GitHub.png'
import BootstrapIcon from '../../assets/images/BootstrapIcon.png'

function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={HTMLIcon} skill="HTML" />
            <SkillList src={CSSIcon} skill="CSS" />
            <SkillList src={JavaScriptIcon} skill="JavaScript" />
            <SkillList src={NodeIcon} skill="Node" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={ReactIcon} skill="React" />
            <SkillList src={AngularIcon} skill="Angular" />
            <SkillList src={VueIcon} skill="Vue" />
            <SkillList src={TailwindIcon} skill="Tailwind CSS" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={ReduxIcon} skill="Redux" />
            <SkillList src={WebpackIcon} skill="Webpack" />
            <SkillList src={GitIcon} skill="Git" />
            <SkillList src={BootstrapIcon} skill="Bootstrap" />
        </div>
        <hr />

    </section>
  )
}

export default Skills
