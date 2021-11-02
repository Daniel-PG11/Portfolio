import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import classes from '../Css/skills.module.css';

import ProgressBar from './progressbar';
import html from '../Images/html.png';
import css from '../Images/css.svg';
import js from '../Images/js.svg';
import react from '../Images/react.svg';
import redux from '../Images/redux.svg';



function Skills() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div className={classes.skills__header}>
            <div className={classes.skills__bg}>
                    <h2>Skills</h2>
                </div>
            <div className={classes.flex}>                
                {/* <div className ={classes.skills__bar}>
                    <span>HTML</span>
                    <ProgressBar bgcolor="orange" progress='80'  height={10} />
                    <span>CSS</span>
                    <ProgressBar bgcolor="orange" progress='75'  height={10} />
                    <span>Javascript</span>
                    <ProgressBar bgcolor="orange" progress='80'  height={10} />
                    <span>React js</span>
                    <ProgressBar bgcolor="orange" progress='85'  height={10} />
                    <span>React Redux</span>
                    <ProgressBar bgcolor="orange" progress='60'  height={10} />
                </div> */}
                <div className={classes.right}>
                        <img data-aos="fade-up" className={classes.skills__fade} src ={html}/>
                        <img data-aos="fade-up" className={classes.skills__fade} src = {css} />
                        <img data-aos="fade-up" className={classes.skills__fade} src = {js} />
                        <img data-aos="fade-up" className={classes.skills__fade} src = {react} />
                        <img data-aos="fade-up" className={classes.skills__fade} src = {redux} />
                </div> 
            </div>       
        </div>
    )
}

export default Skills
