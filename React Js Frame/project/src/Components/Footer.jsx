import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
        <Link to="/">Go to Home</Link><br />
        <Link to="/About">Go to About</Link><br />
        <Link to="/Profile">Go to profile</Link>
    </div>
  )
}
