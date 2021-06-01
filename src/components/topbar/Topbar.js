import React from 'react'
import "./topbar.css"

export default function Topbar() {
    return (
        <div className="topbar">
            <a href="/">Home</a>
            <a href="/#intro">About Me</a>
            <a href="/#projects">Projects</a>
            <a href="/#contacts">Contact</a>
        </div>
    )
}
