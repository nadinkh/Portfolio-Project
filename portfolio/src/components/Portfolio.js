import React from 'react'
import petAdoptionApp from '../petAdoptionApp.PNG'
import wineApp from '../wineApp.PNG'
//FONT AWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import { PopupboxManager, PopupboxContainer } from 'react-popupbox'
import 'react-popupbox/dist/react-popupbox.css'

const Portfolio = () => {

    //adoption
    const openPopupboxAdoption = () => {
        const content = (

            <>
                <img className='portfolio-image-popupbox' src={petAdoptionApp} alt='pet adoption clone project...' />
                <p>Description</p>
                <b>Github:</b><a className='hyper-link' onClick={() => window.open("https://github.com/nadinkh/Pet-Adoption-Frondend/tree/main")}>https://github.com/nadinkh/Pet-Adoption-Frondend/tree/main</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigAdoption = {
        titleBar: {
            enable: true,
            text: "Pet Adoption App"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }


    //wineApp
    const openPopupboxWine = () => {
        const content = (

            <>
                <img className='portfolio-image-popupbox' style={{ height: 400 }} src={wineApp} alt='wine app clone project...' />
                <p>Description</p>
                <b>Github:</b><a className='hyper-link' onClick={() => window.open("https://github.com/nadinkh/Wine-app-Fronend/tree/main")}>https://github.com/nadinkh/Wine-app-Fronend/tree/main</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigWine = {
        titleBar: {
            enable: true,
            text: "Wine App"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div className='portfolio-wrapper'>
            <div className='container'>
                <h1 className='text-uppercase text-center py-5'>portfolio</h1>
                <div className='image-box-wrapper row justify-content-center'>
                    <div className='portfolio-image-box' onClick={openPopupboxAdoption}>
                        <img style={{ height: 135.49 }} className='portfolio-image' src={petAdoptionApp} alt='clone project ..' />
                        <div className='overflow'></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>



                    <div className='portfolio-image-box' onClick={openPopupboxWine}>
                        <img className='portfolio-image' src={wineApp} alt='clone project ..' />
                        <div className='overflow'></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />

                    </div>
                </div>

            </div>
            <PopupboxContainer {...popupboxConfigAdoption} />
            <PopupboxContainer {...popupboxConfigWine} />
        </div>
    )
}

export default Portfolio
