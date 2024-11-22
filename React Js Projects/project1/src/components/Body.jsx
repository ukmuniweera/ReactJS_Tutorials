import React from 'react';
import {people} from './data';
import People from './People';

export default function Body(){
    return(
        <div>
            <h2>List of famous people</h2>
            {people.map(item=><People props={item}></People>)}
        </div>
    );
}