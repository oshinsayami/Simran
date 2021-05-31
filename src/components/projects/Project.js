import React from 'react'
import "./project.css"
import PageHeader from './../pageHeader/PageHeader'
import makeup from './../../img/makeup.png'
import petgram from './../../img/petgram.png'
import hotelify from './../../img/hotelify.png'
import playbtn from './../../img/playbtn.png'


const playBtn = (url) => {
    return (
        <div className="play-btn" onClick={(e) => window.open(url, "_blank").focus}>
            <img src={playbtn} />
        </div>
    )
}

const projectContent = (url, thumbnail, description) => {
    return (
        <div className="project-container">
            <div className="thumbnail">
                {playBtn(url)}
                <img src={thumbnail} alt="thumbnail"></img>
            </div>
            <div className="text">
                <p>{description}</p>
            </div>
        </div>
    )
}

const makeupDesc = 'A makeup e-commerce website that allows users to search and purchase beauty and skin care products'
const hotelifyDesc = 'Interactive website to search hotels by location, reviews and add reviews for their individual stay'
const petgramDesc = 'A React web app to upload pet images, comment and like fellow users photos'

const Project=()=> {
    return (
        <div className="project">
            <PageHeader title={'Projects'} />
            <div className="project-content">
                {projectContent("https://www.youtube.com/watch?v=gxFXDpZTbVo&t=59s",petgram, petgramDesc)}
                {projectContent("https://www.youtube.com/watch?v=OR_DcSfDAxY&t=8s", makeup, makeupDesc)}
                {projectContent("https://www.youtube.com/watch?v=oPyq7h2Bihs", hotelify, hotelifyDesc)}
            </div>
        </div>
    )
}

export default Project;
