import React from 'react'
import "./intro.css"
import PageHeader from './../pageHeader/PageHeader'
import me from './../../img/me.jpg'

export default function intro() {
    return (
        <div className="intro" id="intro">
            <PageHeader title={'About Me'} />
            <div className="container">
                <div className="text">
                    <h2> Hello! I'm Simran Manandhar :)</h2>
                    <p>
                        I'm an enthusiastic, trilingual self-starter experienced in Ruby on Rails, React, and JavaScript based programming with professional experience in Electrical Engineering. I've drive and passion to create measurable results, through continuous improvement, and successful collaborations. I possess solid foundation of web development and the ability to conceptualize solutions to complex problems. And I thrive when challenged to create solutions, develop prototypes and be a successful team member.
                    </p>

                </div>
                <div className="photo">
                <img className="img" src={me} alt="img"></img>
                </div>
            </div>
        </div>
    )
}


