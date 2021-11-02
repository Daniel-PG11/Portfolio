import React from 'react';
import classes from '../Css/about.module.css';


function About() {
    return (
        <div className={classes.about}>
            <h2>About Me</h2>
            <div className={classes.about__des}>
                Hi there!! I am Daniel, a Frontend web developer.
                I really love learning and making new things. 
                That is what encouraged me into programming. 
                My goal is to become a successful software developer
            </div>
        </div>
    )
}

export default About
