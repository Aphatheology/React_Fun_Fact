import React from "react";
import ReactLogo from "../images/logo512.png"

export default function Navbar () {
    return (
        <nav>
            <img src={ReactLogo} alt="React Logo" />
            <h3>React Facts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}