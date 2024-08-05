import React from 'react';
import gitHub from '../assets/github.png';
import insta from '../assets/Instagram.webp';
import linkedIn from '../assets/linkedIn.png';
import profileimage2 from '../assets/praveenProfile.png.jpeg';
import whatsapp from '../assets/WhatsApp_icon.png.webp';

const Banner = () => {
    return (
        <div style={{ background: '#f8f7ff' }} className='py-4'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-8 text-center-small">
                        <div>
                            <span className='letter-onebyone'>
                                <span className='span-1' style={{ fontWeight: 'bold' }}>Hey! I am</span> 
                                <span className='span-2 text-violet'> Praveen Bhukya</span>
                            </span>
                            <br />
                            <span className='span-3 text-violet letter-onebyone'>Software Engineer</span>
                            <div className='fs-5 mt-3'>
                                Full-Stack Developer with extensive experience in web design and development. I specialize in creating high-quality websites and applications.
                                <span className='d-none-small'>My expertise spans across both front-end and back-end technologies.</span>
                            </div>
                            <a 
                                data-aos="fade-zoom-in" 
                                data-aos-delay="300" 
                                href='#contact' 
                                className='btn bg-violet text-white mt-4 px-5'
                            >
                                Hire me
                            </a>
                            <div className='mt-5 mb-4 social-icons'>
                                <a 
                                    data-aos="fade-zoom-in" 
                                    data-aos-delay="500" 
                                    href="#" 
                                    target='_blank'
                                >
                                    <img src={whatsapp} width={30} className='me-4' alt="WhatsApp" />
                                </a>
                                <a 
                                    data-aos="fade-zoom-in" 
                                    data-aos-delay="800" 
                                    href='https://www.instagram.com/bunny_bhukya2/' 
                                    target='_blank'
                                >
                                    <img src={insta} width={30} className='me-4' alt="Instagram" />
                                </a>
                                <a 
                                    data-aos="fade-zoom-in" 
                                    data-aos-delay="1100" 
                                    href='https://www.linkedin.com/in/bhukya-praveen-75555124b/' 
                                    target='_blank'
                                >
                                    <img src={linkedIn} width={30} className='me-4' alt="LinkedIn" />
                                </a>
                                <a 
                                    data-aos="fade-zoom-in" 
                                    data-aos-delay="1400" 
                                    href='https://github.com/Bhukyapraveen2?tab=repositories' 
                                    target='_blank'
                                >
                                    <img src={gitHub} width={30} className='me-4' alt="GitHub" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div 
                            className='banner-image-div margin-top2-small' 
                            data-aos="fade-left" 
                            data-aos-delay="5000" 
                            data-aos-easing="ease-in-sine" 
                            data-aos-duration="500"
                        >
                            <img src={profileimage2} width="100%" alt="Profile" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
