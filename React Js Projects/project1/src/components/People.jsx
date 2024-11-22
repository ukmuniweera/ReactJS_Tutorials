import React from 'react';
import '../assets/css/main.css';

export default function People({props}){
    return(
        <div className="maincard">
            <div className="profile">
                <img src={'https://i.imgur.com/'+props.imageId+'s.jpg'} alt={details.name} />
            </div>
            <div className="details">
                <p>{props.name}</p>
                <p>{props.profession}</p>
                <p>{props.accomplishment}</p>
            </div>
        </div>
    );
}