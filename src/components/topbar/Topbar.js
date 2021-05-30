import React from 'react'
import "./topbar.css"
import { Link } from 'react-router-dom'

export default function Topbar() {
    return (
        <div className="topbar">
            <Link className="topbarLink" to="/">Home</Link>
            <Link className="topbarLink" to="/intro">Intro</Link>
            <Link className="topbarLink" to="/projects">Projects</Link>
            <Link className="topbarLink" to="/contacts">Contacts</Link>
        </div>
    )
}
