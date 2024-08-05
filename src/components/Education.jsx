import React from 'react'
import './experience.css'


const Education = () => {
    return (
        <div className="container mt-4" id='education'>
            <div className='d-flex justify-content-center'>
            <h2 className='border-bottom pb-1 mb-5  text-violet work-title' style={{ width: 'fit-content', margin: '0 auto', fontWeight: 'bold' }}>
                    Education
                </h2>
            </div>
            <section>
                <div className="container py-5" style={{ backgroundColor: '#f8f7ff' }}>
                    <div className="main-timeline">
                        <div data-aos-delay="700" data-aos="fade-right" className="timeline left">
                            <div className="card text-white" style={{ backgroundColor: '#8B93FF' }}>
                                <div className="card-body p-4">
                                    <div>
                                        <span className='fs-5' style={{ fontWeight: 'bold' }}>B.Tech</span>
                                    </div>
                                    <h5 className='mt-2'>2019-2022</h5>
                                    <h6><strong>TKR college, (CSE), Meerpet(Md.),Hydrabad(Dt.)</strong></h6>

                                </div>
                            </div>
                        </div>
                        <div className="timeline right" data-aos-delay="700" data-aos="fade-left">
                            <div className="card text-white" style={{ backgroundColor: '#03AED2' }}>
                                <div className="card-body p-4">
                                    <div>
                                        <span className='fs-5' style={{ fontWeight: 'bold' }}>Diploma</span>
                                    </div>
                                    <h5 className='mt-2'>2016 - 2019</h5>
                                    <h6><strong>Bomma Institute, (CSE.), Khammam(Md.), Khammam(Dt.)</strong></h6>

                                </div>
                            </div>
                        </div>
                        <div className="timeline left" data-aos-delay="700" data-aos="fade-right">
                            <div className="card text-white" style={{ backgroundColor: '#88D66C' }}>
                                <div className="card-body p-4">
                                    <div>
                                        <span className='fs-5' style={{ fontWeight: 'bold' }}>SSC</span>
                                    </div>
                                    <h5 className='mt-2'>2009 - 2016</h5>
                                    <h6><strong>St Augustine School, Maripeda(Md.), Mahabubabad(Dt.)</strong></h6>
                                </div>
                            </div>
                        </div>
                        <div className="timeline right" data-aos-delay="700" data-aos="fade-left">
                            <div className="card text-white" style={{ backgroundColor: '#EF5A6F' }}>
                                <div className="card-body p-4">
                                    <div>
                                        <span className='fs-5' style={{ fontWeight: 'bold' }}>Primary (1-7th)</span>
                                    </div>
                                    <h5 className='mt-2'>2005 - 2009</h5>
                                    <h6><strong>Shanthinikathan School, Maripeda(Md.), Mahabubabad(Dt.)</strong></h6>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Education