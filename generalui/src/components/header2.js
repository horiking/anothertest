import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import Button from './basic/button'

const Header2 = ({color}) => {
    return(
        <div className="header">
			<span className="header2left" style={{backgroundColor:color}}>
				<label>
					Stock Overflow
				</label>
			</span>
			<span className="header2right" style={{backgroundColor:color}}>
				<TextField id="standard-basic" label="Search" className="headertext"/>
				<Button text="login"/>
				<Button text="register"/>
			</span>
            
        </div>
    );
}

Header2.defaultProps = {
	color: "rgb(25, 25, 49)",
}

export default Header2;