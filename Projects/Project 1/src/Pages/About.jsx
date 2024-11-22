import React from 'react';
import Header from '../Components/Header';
import Content from '../Components/Content';
import Footer from '../Components/Footer';

export default function About() {
  return (
    <div>
        <h1>About</h1>
        <Header/>
        <Content item="About" no="2"/>
        <Footer>
          <span>Located to About page</span>
        </Footer>
    </div>
  )
}
