import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">Nadine's Portfolio</a >
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link >
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="about me" offset={-110} className="nav-link" href="#">About me</Link >
                        </li>
                        {/* <li className="nav-item">
                            <Link  className="nav-link" href="#">services</Link >
                        </li> */}
                        <li className="nav-item">
                            <Link smooth={true} to="Technical Skills" offset={-110} className="nav-link" href="#">Technical Skills</Link >
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="experience" offset={-110} className="nav-link" href="#">experience</Link >
                        </li>
                        {/* <li className="nav-item">
                            <Link  className="nav-link" href="#">How I work</Link >
                        </li> */}
                        <li className="nav-item">
                            <Link smooth={true} to="Recent Projects" offset={-110} className="nav-link" href="#">Recent Projects</Link >
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="contact me" offset={-110} className="nav-link" href="#">Contact Me</Link >
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
