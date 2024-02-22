import React from 'react'

const Contact = () => {
    return (
        <section className='contact' id='contact'>
            <h1 className='heading'>
                <span>Contact</span> Us
            </h1>
            <div className='row'>
            <iframe className='map'
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14465.816866177698!2d83.99749520540762!3d24.984677362414455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sThings%20to%20do!5e0!3m2!1sen!2sin!4v1708634920552!5m2!1sen!2sin" 
            allowfullscreen="" 
            loading="lazy"
            ></iframe>
                <form>
                    <h3>get in touch</h3>
                    <div className='inputBox'>
                        <span className='fas fa-user'></span>
                        <input type="text" placeholder='name'/>
                    </div>
                    <div className='inputBox'>
                        <span className='fas fa-envelope'></span>
                        <input type="email" placeholder='email'/>
                    </div>
                    <div className='inputBox'>
                        <span className='fas fa-phone'></span>
                        <input type="number" placeholder='number'/>
                    </div>
                    <input type="submit" value="contact now" className='btn'/>
                </form>
            </div>

        </section>
    )
}

export default Contact