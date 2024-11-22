import React from 'react';
import Header from '../Components/Header';
import Content from '../Components/Content';
import Footer from '../Components/Footer';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function Home() {
  let [count,setCount] = useState(0);

  const increment=()=>{
    setCount(count+1);
  }

  const decrement=()=>{
    setCount(count-1);
  }

  const reset=()=>{
    setCount(count=0);
  }

  return (
    <div>
        <h1>Home</h1>
        <Header/>
        <Content item="Home" no="1"/>
        <span>Counter</span>
        <p>Count is: {count}</p>
        <ButtonGroup aria-label="Basic example">
          <Button variant="danger" onClick={decrement}>-</Button>
          <Button variant="success" onClick={increment}>+</Button>
          <Button variant="primary" onClick={reset}>Reset</Button>
        </ButtonGroup>        
        <Footer>
          <span>Located to Home page</span>
          
        </Footer>
    </div>
  )
}
