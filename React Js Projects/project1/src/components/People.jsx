import React from 'react';
import '../assets/css/main.css';

export default function People({details}){
    return(
        <div className="maincard">
            <div className="profile">
                <img src={'https://i.imgur.com/'+details.imageId+'s.jpg'} alt={details.name} />
            </div>
            <div className="details">
                <p>{details.name}</p>
                <p>{details.profession}</p>
                <p>{details.accomplishment}</p>
            </div>
        </div>
    );
}