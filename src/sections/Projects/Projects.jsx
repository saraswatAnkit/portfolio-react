import React from 'react'
import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/images/viberr.png'
import ProjectCard from '../../common/ProjectCard'
import freshBrurger from '../../assets/images/shop.png'
import fitLift from '../../assets/images/fitlift.png'
import shopping from '../../assets/images/shopsy.webp'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectContainer}>
      <ProjectCard src={freshBrurger} link={"https://innovation-university-codyankit.netlify.app/"} h3='Innovation' p="Innovation University" />
        <ProjectCard src={fitLift} link={"https://saraswat-gym.netlify.app"} h3='Saraswat Gym' p="Shopping & plans in Gym" />
        <ProjectCard src={shopping} link={"https://saraswat-shopsy-online-mall.netlify.app"} h3='Shopsy' p="E-commerce Website" />
        <ProjectCard src={viberr} link={"https://iphone15-saraswatankit.netlify.app"} h3='Viberr' p="iPhone Website" />
      </div>
    </section>
  )
}

export default Projects

