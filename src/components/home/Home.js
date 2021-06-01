import React from 'react'
import './home.css'
import women from './../../img/women.png'

const Home = () => {
    return (
        <div className="home" id="home">
        <img className="img1" src={women} alt="img1"></img>
            <div className="container">
                <h1>Hi!</h1>
                <h1>Welcome to my website!!</h1>
            </div>

        </div>
    )
}

export default Home;