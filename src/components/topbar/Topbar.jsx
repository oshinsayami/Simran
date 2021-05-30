import React from 'react'
import "./topbar.scss"
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';

export default function Topbar() {
    return (
        <div className="topbar">
                <Link to="/intro"><Button>Intro</Button></Link>
                <Link to="/projects"><Button>Projects</Button></Link>
                <Link to="/contacts"><Button>Contacts</Button></Link>
        </div>
    )
}
