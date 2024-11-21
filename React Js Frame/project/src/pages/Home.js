import React from 'react';
import TopicBox from '../components/TopicBox';
import Content from '../components/Content';

export default function Home() {
  return (
    <div>
        <h1>Home page</h1>
        <TopicBox food = "Koththu" price = "Rs 250" >
            <span>This is the description</span>
        </TopicBox>
        <TopicBox food = "Hoppers" price = "Rs 350" >
            <button>Click me!</button>
        </TopicBox>
        <TopicBox food = "Rice" price = "Rs 150" >
            <p>This is paragraph</p>
        </TopicBox>
        <Content></Content>
    </div>
  )
}
