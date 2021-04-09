import React from 'react'
import Typed from 'react-typed'
function Header() {
    return (
        <div id='home' className="header-wrapper">
            <div className="main-info">
                <h1>Nadine Khamis</h1>
                <h1>Full Stack Developer</h1>

                <Typed
                    className="typed-text"
                    strings={["Web Development", "Front End", "Back End"]}
                    style={{ color: "white" }}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />

            </div>

        </div>
    )
}

export default Header
