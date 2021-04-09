// import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faLaptopCode, faAngleDoubleLeft, faDatabase, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'



function TechSkills() {
    return (
        <div id='Technical Skills' className='techskills'>
            <h1 className='py-5'>Technical skills</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 col-sm-6'>
                        <div className='box'>
                            <div className='circle'>
                                <FontAwesomeIcon className='skillsicon' icon={faLaptopCode} size='2x' />
                            </div>
                            <h3>Front End Technologies</h3>
                            <h4>HTML</h4>
                            <h4>CSS/SCSS</h4>
                            <h4>BOOSTRAP/MATERIAL-UI</h4>
                            <h4>javaScript</h4>
                            <h4>React</h4>
                            <h4>React Native</h4>
                        </div>
                    </div>

                    <div className='col-md-3 col-sm-6'>
                        <div className='box'>
                            <div className='circle'>
                                <FontAwesomeIcon className='skillsicon' icon={faAngleDoubleLeft} size='2x' />
                            </div>
                            <h3>Back End Technologies</h3>
                            <h4>NodeJS</h4>
                            <h4>Express</h4>
                            <h4> REST APIs Technologies</h4>
                            <h4>FireBase</h4>
                        </div>
                    </div>

                    <div className='col-md-3 col-sm-6'>
                        <div className='box'>
                            <div className='circle'>
                                <FontAwesomeIcon className='skillsicon' icon={faDatabase} size='2x' />
                            </div>
                            <h3>Data BASE</h3>
                            <h4>MongoDB</h4>
                            <h4>SQL</h4>
                        </div>
                    </div>

                    <div className='col-md-3 col-sm-6'>
                        <div className='box'>
                            <div className='circle'>
                                <FontAwesomeIcon className='skillsicon' icon={faCloudUploadAlt} size='2x' />
                            </div>
                            <h3>Deployment</h3>
                            <h4>Heroku</h4>
                            <h4>Netlifly</h4>
                            <h4>Github</h4>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default TechSkills
