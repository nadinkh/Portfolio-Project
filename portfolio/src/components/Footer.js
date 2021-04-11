import React from 'react'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { EmailIcon, EmailShareButton } from 'react-share'
import { Link } from 'react-scroll'

function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        <div className='d-flex'>
                            <FontAwesomeIcon icon={faEnvelopeOpenText} size='md' style={{ marginRight: '0.5rem' }} />
                            <p>nadinkhamis2@gmail.com</p>
                        </div>
                        <div className='d-flex'>
                            <a href='tel:+927-528-338-736'>Tel:+927-528-338-736</a>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-2 col-sm-6'>
                        <div className='row'>
                            <div className='col'>
                                <Link smooth={true} to="home" className='footer-nav'>Home</Link>
                                <br />
                                <Link smooth={true} to="about me" className='footer-nav'>About me</Link>
                                <br />
                                <Link smooth={true} to="Technical Skills" className='footer-nav'>Technical Skills</Link>
                            </div>
                            <div className='col'>
                                <Link smooth={true} to="experience" className='footer-nav'>Experience</Link>
                                <br />
                                <Link smooth={true} to="Recent Projects" className='footer-nav'>Projects</Link>
                                <br />
                                <Link smooth={true} to="contact me" className='footer-nav'>Contact Me</Link>
                            </div>
                        </div>
                    </div>
                    {/* <div className='col-lg-5 col-md-5 col-sm-6 align-items-center'>
                        <div className='d-flex justify-content-center'>
                            <EmailShareButton
                                url={'nadinkhamis2@gmail.com'}
                            >
                                <EmailIcon className='mx-3' size={36} />
                            </EmailShareButton>
                        </div>
                    </div> */}
                    <p className='pt-3 text-center'>
                        Copyright&copy;
                        {new Date().getFullYear()}&nbsp;New Horizon | All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
