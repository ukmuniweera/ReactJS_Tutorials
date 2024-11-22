import React from 'react';
import Header from '../Components/Header';
import Content from '../Components/Content';
import Footer from '../Components/Footer';
import { useState } from 'react';

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
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
        <Footer>
          <span>Located to Home page</span>
          
        </Footer>
    </div>
  )
}
