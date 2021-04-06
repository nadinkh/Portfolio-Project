import React from 'react'

const Experience = () => {
    return (
        <div className='experience'>
            <div className='d-flex justify-content-center my-5'>
                <h1>experience</h1>
            </div>
            <div className='container experience-wrapper'>
                <div className='timeline-block timeline-block-right'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3>2020-Today Front-End Developer, SafeUp</h3>
                        <p>
                            2-month internship -full time web and app development using React,React-native,javaScript ,CSS and
                            material-UI
                         </p>
                    </div>
                </div>





                <div className='timeline-block timeline-block-left'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3>2016-2020 Mechanical Design Engineer, Intel. </h3>
                        <ul>
                            <li>
                                Mechanical sheets design of Intel FAB28's tools manufacturers: designed Infrastructure for process tools including chemicals and Gas supply electrical wiring, exhaust tubes.
                             </li>
                            <li>Review and feedback from field to issue for construction.</li>
                            <li>Monitoring record of discussion for construction work done on the FAB.</li>
                        </ul>
                    </div>
                </div>



                <div className='timeline-block timeline-block-right'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3>2015-2016 Material Engineer, Tel-Aviv University.</h3>
                        <p>
                            Examine the mechanical and the electrical properties of substrates before and after undergoing 3D printing
                            substrates. In collaboration with the "Printel" corporation: Stratasys and Orbotech, as well as Tel-Aviv
                            University, Technion and Hebrew University.
                           <br /> Presented at IMEC 17 Israel Materials Engineering Conference in Bar-Ilan University in February 2016.
                         </p>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Experience
