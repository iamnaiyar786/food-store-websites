import React from 'react'
import { review } from '../Data'
import quoteImg from "../assets/images/quote-img.png"

const Review = () => {
  return (
    <section className='review' id='review'>
        <h1 className="heading">
            customer's <span>review</span>
        </h1>
        <div className="box-container">
            {
                review.map((item,index)=>(
                    <div className="box">
                        <img src={quoteImg} alt="" className="quote" />
                    
                        <p>
                            fhsgfhbrtrstb thfgghfg g hfghfg  dffg hf dfg dsfgd f  f fhf f ghfghghgg ghgy ujukjk jkj kkl l  kj asafdfsg
                        </p>
                        <img src={item.img} alt=""/>
                        <h3>john deo</h3>
                        <div className='stars'>
                            <i className='fas fa-star'/>
                            <i className='fas fa-star'/>
                            <i className='fas fa-star'/>
                            <i className='fas fa-star'/>
                            <i className='fas fa-star-half-alt'/>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>

  )
}

export default Review