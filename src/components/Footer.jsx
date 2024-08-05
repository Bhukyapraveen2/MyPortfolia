import React from 'react'
import gitHub from '../assets/github.png'
import insta from '../assets/Instagram.webp'
import linkedIn from '../assets/linkedin2.jpg'
import whatsapp from '../assets/WhatsApp_icon.png.webp'
const Footer = () => {
  return (
    <div className='container-fluid bg-violet mt-3 text-center'>
      <h2 className='text=center text-white pt-3' style={{ fontWeight: 'bold' }}>Praveen Bhukya</h2>
      <div className='mt-4'>

        <a data-aos-delay="100" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="600" href="#" target='_blank'>
          <img src={whatsapp} width={30} className='me-4' />
        </a>
        <a data-aos-delay="300" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="600" href='https://www.instagram.com/bunny_bhukya2/' target='_blank'><img src={insta} width={30} className='me-4' /></a>
        <a data-aos-delay="500" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="600" href='https://www.linkedin.com/in/bhukya-praveen-75555124b/' target='_blank'><img src={linkedIn} width={30} className='me-4' /></a>
        <a data-aos-delay="700" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="600" href='https://github.com/Bhukyapraveen2?tab=repositories' target='_blank'><img src={gitHub} width={30} className='me-4' /></a>
      </div>
      <h5 className='text-white mt-4 pb-5'>© Praveen Bhukya. All rigths reserved</h5>
    </div>
  )
}

export default Footer