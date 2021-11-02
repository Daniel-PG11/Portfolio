import react from 'react';

import classes from '../Css/socialmedia.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const SocialMedia = () => {
    return(
        <div className={classes.social} >
            <h3>Talk to me at</h3>
            <div className={classes.socialMedia}>
                <GitHubIcon className={classes.icon} />
                <InstagramIcon className={classes.icon} />
                <LinkedInIcon className={classes.icon} />
            </div>
        </div>
    )
}

export default SocialMedia;