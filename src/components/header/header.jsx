import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Abdul Mannan Saipi</h1>
        <h5 className="text-light">coders</h5>
        <CTA></CTA>
        <HeaderSocial></HeaderSocial>
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>


      </div>
    </header>
  )
}

export default header