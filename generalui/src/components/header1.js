import { colors } from '@material-ui/core';
import React from 'react';
import Label from './basic/label'

const Header1 = ({color}) => {
    return(
        <div className="header" style={{backgroundColor: color}}>
           <Label text="DAX"/>
        </div>
    );
}

Header1.defaultProps = {
	color: "black",
}

export default (Header1);

