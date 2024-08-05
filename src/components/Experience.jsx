import React from 'react'
import './experience.css'


const Experience = () => {
    return (
        <div className="container mt-4" id='experience'>
            <div className='d-flex justify-content-center'>
            <h2 className='border-bottom pb-1 mb-5  text-violet work-title' style={{ width: 'fit-content', margin: '0 auto', fontWeight: 'bold' }}>
                    Experience
                </h2>
            </div>
            <section>
                <div className="container py-5" style={{ backgroundColor: '#f8f7ff' }}>
                    <div className="main-timeline">
                        <div data-aos-delay="7000" data-aos="fade-right" className="timeline left">
                            <div className="card text-white" style={{ backgroundColor: '#8B93FF' }}>
                                <div className="card-body p-4">
                                    {/* <div className='d-flex justify-content-between'>
                                        <h2>Acute Soft Solutions</h2>
                                        <img src={acute} width={100}  />
                                    </div> */}

                                    <div>
                                        <span className='fs-5' style={{ fontWeight: 'bold' }}>BOSCH</span>, <span>Hyderabad</span>
                                    </div>
                                    <h5 className='mt-2'>2022 - Current</h5>
                                    <h6><strong>Software Engineer</strong></h6>

                                </div>
                            </div>
                        </div>
                        <div className="timeline right" data-aos-delay="7000" data-aos="fade-left">
                            <div className="card text-white" style={{ backgroundColor: '#03AED2' }}>
                                <div className="card-body p-4">
                                    <div>
                                        <span className='fs-5' style={{ fontWeight: 'bold' }}>xyz</span>, <span>Hyderabad</span>
                                    </div>
                                    <h5 className='mt-2'>2021 - 2022</h5>
                                    <h6><strong>MERN Stack Developer</strong></h6>

                                </div>
                            </div>
                        </div>
                        <div className="timeline left" data-aos-delay="7000" data-aos="fade-right">
                            <div className="card text-white" style={{ backgroundColor: '#88D66C' }}>
                                <div className="card-body p-4">
                                    <div>
                                        <span className='fs-5' style={{ fontWeight: 'bold' }}>Rapid Data Technologies</span>, <span>Chennai</span>
                                    </div>
                                    <h5 className='mt-2'>2021 - 2022</h5>
                                    <h6><strong>UI Developer</strong></h6>
                                </div>
                            </div>
                        </div>
                        <div className="timeline right" data-aos-delay="7000" data-aos="fade-left">
                            <div className="card text-white" style={{ backgroundColor: '#EF5A6F' }}>
                                <div className="card-body p-4">
                                    <div>
                                        <span className='fs-5' style={{ fontWeight: 'bold' }}>xyz</span>, <span>Hyderabad</span>
                                    </div>
                                    <h5 className='mt-2'>2018 - 2020</h5>
                                    <h6><strong>UI Developer</strong></h6>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Experience