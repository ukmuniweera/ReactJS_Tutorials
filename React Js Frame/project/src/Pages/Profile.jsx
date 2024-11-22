import React from 'react';
import Header from '../Components/Header';
import Content from '../Components/Content';
import Footer from '../Components/Footer';

export default function Profile() {
  return (
    <div>
        <h1>Profile</h1>
        <Header/>
        <Content item="Profile" no="3"/>
        <Footer>
          <span>Located to Profile page</span>
        </Footer>
    </div>
  )
}
