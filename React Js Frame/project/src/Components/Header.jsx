import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function Header() {
    const navigate = useNavigate();
  return (
    <div>
        <ButtonGroup aria-label="Basic example">
            <Button variant="dark" onClick={()=> navigate("/")}>
                Home
            </Button>
            <Button variant="dark" onClick={() => navigate("/About")}>
                About
            </Button>
            <Button variant="dark" onClick={()=>navigate("/Profile")}>
                Profile
            </Button>
        </ButtonGroup>  
    </div>
  );
}
