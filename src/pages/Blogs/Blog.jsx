import React from 'react'
import { BsCalendarDate } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const Blog = ({ blog }) => {
    const { image, title, publish_date, description, id } = blog;
    console.log(blog)

    return <div className='mb-10 flex flex-col lg:flex-row gap-6 p-5 border '>
        <div className='w-full lg:w-2/5 h-[300px]'>
            <img className='w-full block h-full' src={image} alt="Image unavailable" />
        </div>
        <div className='w-full lg:w-3/5'>
            <h3 className='font-bold text-2xl '>{title}</h3>
            <p className='flex items-center gap-2 font-medium text-gray-500 text-sm mt-2'><BsCalendarDate /> {publish_date}</p>

            <div className='mt-6 leading-8 font-semibold text-gray-500'>
                {
                    description.length > 400 ? <p>{description.slice(0, 400)}...<Link to={`/blog/${id}`} className='text-blue-600 font-semibold'>Continue Reading</Link></p> : <p>{description}</p>
                }
            </div>
        </div>
    </div>
}

export default Blog