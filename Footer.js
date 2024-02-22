import React from 'react'

const Footer = () => {
  return (
    <section className='footer'>
        <div className='share'>
            <a href='https://www.facebook.com/imsultan786/' className='fab fa-facebook-f'></a>
            <a href='https://twitter.com/imsultan786' className='fab fa-twitter'></a>
            <a href='https://www.instagram.com/imsultan786' className='fab fa-instagram'></a>
            <a href='https://github.com/iamnaiyar786' className='fab fa-github'></a>
        </div>
        <div className='links'>
            <a href='#'>home</a>
            <a href='#'>about us</a>
            <a href='#'>menu</a>
            <a href='#'>products</a>
            <a href='#'>review</a>
            <a href='#'>contact</a>
            <a href='#'>blogs</a>
        </div>
        <div className='credit'>
            Created By <span>Coding Circulate |</span> All Rights Reserved
        </div>
    </section>
  )
}

export default Footer