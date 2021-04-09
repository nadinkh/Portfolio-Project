import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'


const Contacts = () => {
    return (
        <div id='contact me' className='contacts'>
            <div className='text-center'>

                <h1>Contact me</h1>
                <a className='facebook icon' href='https://www.facebook.com/nadin.khamis.5'><FontAwesomeIcon icon={faFacebook} size='3x' /></a>
                <a className='linked-in icon' href='https://www.linkedin.com/in/nadine-khamis-b632aab7/'><FontAwesomeIcon icon={faLinkedin} size='3x' /></a>
                <a className='github icon' href='https://github.com/nadinkh'><FontAwesomeIcon icon={faGithub} size='3x' /></a>
                <a className='email icon' href='www.nadinkhamis2@gmail.com'><FontAwesomeIcon icon={faEnvelopeOpenText} size='3x' /><br />
                </a>


            </div>

        </div>
    )
}

export default Contacts
