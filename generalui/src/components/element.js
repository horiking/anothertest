import React from 'react';


const Elements = (props) =>{
	const { elements } = props;
    console.log(props.data);
    return(
    <h1>
        <div>
            {props.elements.map(({ db_keyword, db_frequency }, index) => <li key={index}>Keyword: {db_keyword}, Frequency: {db_frequency}</li>)}
        </div>
    </h1>
    )
    //elementlist.map((elementlist) => {
    //    
    //    <label>
    //        {elementlist.name}
    //    </label>
    //})
};


export default Elements;