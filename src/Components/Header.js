import React from 'react';
import Typewriter from "typewriter-effect";
import { useState } from 'react';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import classes from './../Css/Header.module.css';
import './../Css/header.css';
import { keys } from '@mui/system';

function Header() {

    const [navbar, setnavbar] = useState(false);

    const opennav = () => {
        setnavbar(prevState => !prevState);
    }
    
    return (
        <div className = {classes.header}>
            <nav className = {classes.desktop}>
                <ul className= {classes.header__ul}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Works</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <nav className = { `mobile_header ${navbar ? 'mobile__bg' :'navheight'}`} >
                <div onClick ={opennav} className ={classes.header__bg} >
                    <MenuRoundedIcon />
                </div>
                {
                    navbar &&
                    <ul className ={classes.mob__ul}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Works</li>
                        <li>Contact</li>
                    </ul>
                }
                
            </nav>
            <div className = {classes.header__body}>
                <h3 className ={classes.name}>
                <Typewriter
                    onInit={(typewriter)=> {
                        typewriter
                        .typeString(" Hello, Iam Daniel ")

                        .start();
                    }}
                />
                </h3>
                <h3 className={classes.font}>Frontend Developer</h3>
            </div>
            <div className={classes.downarrow}>
                <KeyboardArrowDownRoundedIcon />
            </div>
        </div>
    )
}

export default Header
