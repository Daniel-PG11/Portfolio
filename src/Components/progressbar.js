import React from 'react';

import classes from '../Css/skills.module.css';

  
const progressbar = ({bgcolor,progress,height}) => {
     
    const Parentdiv = {
        height: height,
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        marginLeft: 0,
        marginRight:0,
        marginTop:25,
        marginBottom:25
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius:40,
        textAlign: 'right'
      }
        
    return (
    <div className={classes.Progressbar__div} style={Parentdiv}>
      <div style={Childdiv}></div>
    </div>
    )
}
  
export default progressbar;