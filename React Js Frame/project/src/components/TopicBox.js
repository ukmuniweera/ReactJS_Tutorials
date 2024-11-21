import React from 'react';
import './TopicBox.css';

export default function TopicBox(props) {
    const topic = 'Topic bar';
    return (
    <div>
        <div className="topicBox">
            <span className='text'>{props.food} price is: {props.price}</span>
            {props.children}
        </div>
    </div>
  )
}
