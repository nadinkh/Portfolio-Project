import React from 'react'
import profileImage from '../profileImage.jpg'
const AboutMe = () => {
    return (
        <div className='container py-5'>
            <div className='row'>
                <div className='col-lg-6 col-xm-12'>
                    <div className='photo-wrap mb-5'>
                        <img className='profile-img' src={profileImage} alt='profile image...' />
                    </div>
                </div>
                <div className='col-lg-6 col-xm-12'>
                    <h1 className='about-heading'>about me</h1>
                    <p>Full Stack Developer recently graduated from ITC coding Bootcamp. Proficient in adapting to new interfaces
                    and software’s independently. Hard-working, highly motivated team player with strong time management and
                    multitasking skills. Seeking to take the next step in my career. A Full Stack Developer & Materials Engineer
                    seeking my way to interesting, challenging, and hard work endeavors.
                    <br />
                    Technical skils:<br />
                    Front-end: HTML, CSS (including Bootstrap), JavaScript (ES6), React, React Native.<br />
Back-end: NodeJS, Express, SQL, MongoDB, Firebase, Heroku (Dyno).
Other relevant skills: REST APIs, Unit-Testing, Git.  </p>

                </div>
            </div>
        </div>
    )
}

export default AboutMe
