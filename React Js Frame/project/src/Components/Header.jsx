import React from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
  return (
    <div>
        <button onClick={()=> navigate("/")}>
            Home
        </button>
        <button onClick={() => navigate("/About")}>
            About
        </button>
        <button onClick={()=>navigate("/Profile")}>
            Profile
        </button>
        <hr />
    </div>
  );
}
