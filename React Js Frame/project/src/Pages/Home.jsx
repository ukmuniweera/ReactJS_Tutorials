import React from 'react';
import Header from '../Components/Header';
import Content from '../Components/Content';
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <div>
        <h1>Home</h1>
        <Header/>
        <Content item="Home" no="1"/>
        <Footer>
          <span>Located to Home page</span>
        </Footer>
    </div>
  )
}
