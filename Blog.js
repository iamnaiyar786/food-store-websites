import React from 'react'
import { blog } from '../Data'
const Blog = () => {
  return (
    <>
    <section className='blogs' id='blogs'>
        <h1 className="heading">
            our <span>blogs</span>
        </h1>
        <div className='box-container'>
            {
                blog.map((item,index)=>(
                    <div className='box' key={index}>
                        <div className='image'>
                            <img src={item.img} alt=""/>
                        </div>
                        <div className='content'>
                            <a href='#' className='title'>
                                tasty and refreshing spices
                            </a>
                            <span>by admin / 21st Feb, 2024</span>
                            <p>fghfgh h fghfgh fghf g g hgfh gfhfdghfghd fghdf ghdffd</p>
                            <button className='btn'>read more</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
    </>
  )
}

export default Blog