import React from 'react'
import "./contact.css"
import { FaYoutube, FaMediumM, FaGithub, FaLinkedin } from "react-icons/fa";

const handleURL = (url) => {
    return ( )=> window.open(url,"_blank")
}

export default function Contact() {
    return (
        <div className="contact">
            <FaYoutube color='white' size='30px' style={{ padding: '1%' }} onClick={handleURL('https://www.youtube.com/channel/UCEC0yt7WB6ZW9_KA8Fm94GQ') } />
            <FaMediumM color='white' size='30px' style={{ padding: '1%' }} onClick={handleURL('https://mdrsimran.medium.com/') } />
            <FaGithub color='white' size='30px' style={{ padding: '1%' }} onClick={handleURL('https://github.com/oshinsayami') } />
            <FaLinkedin color='white' size='30px' style={{ padding: '1%' }} onClick={handleURL('https://www.linkedin.com/in/simran-manandhar/') } />
        </div>
    )
}
