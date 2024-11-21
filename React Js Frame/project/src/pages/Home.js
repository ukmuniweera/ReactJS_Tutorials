import React from 'react';
import TopicBox from '../components/TopicBox';
import Content from '../components/Content';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
        <h1>This is home</h1>
        <link to="/About">Go to about page</link>
    </div>
  );
}
