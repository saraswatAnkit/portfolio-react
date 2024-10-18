import React, { useState } from "react";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/images/crop-image.webp";
import sun from "../../assets/images/sun.svg";
import moon from "../../assets/images/moon.svg";
import twitterLight from "../../assets/images/twitter-light.svg";
import twitterDark from "../../assets/images/twitter-dark.svg";
import githubLight from "../../assets/images/github-light.svg";
import githubDark from "../../assets/images/github-dark.svg";
import linkedinLight from "../../assets/images/linkedin-light.svg";
import linkedinDark from "../../assets/images/linkedin-dark.svg";
// import CV from "../../assets/Ankit-Saraswat-FullStack.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme()
  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Ankit Saraswat"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Ankit <br />
          Saraswat
        </h1>
        <h2>FullStack Developer</h2>
        <span>
          <a href="https://x.com/saraswatankit26" target="_blank">
            <img src={twitterIcon} alt="twitter icon" />
          </a>
          <a href="https://github.com/saraswatankit" target="_blank">
            <img src={githubIcon} alt="github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/ankit-saraswat-b885311b0/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern FullStack web apps for commercial
          businesses.
        </p>
        <a href="https://ankit-saraswat-portfolio.netlify.app/" target="_blank">
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
