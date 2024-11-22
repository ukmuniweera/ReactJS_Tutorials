import React from "react";

export default function SculpureViewer({details}){
    return(
        <div>
            <p>{details.name}</p>
            <img src={details.url} alt={details.alt} />
        </div>
    );
}