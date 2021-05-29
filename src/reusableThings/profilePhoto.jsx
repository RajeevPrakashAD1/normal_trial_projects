import React from 'react';



export default function CircularPhoto(props){
    return(
        <div className="circular-img"><img src={props.source} alt="circularPic" /></div>
    )

}