import React from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();
    return (
        <div>
            <button></button>
            <button onClick={() => navigate("/profile")}>
                Profile
            </button>
        </div>
    );
}
