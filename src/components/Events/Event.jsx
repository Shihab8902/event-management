import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Event = ({ event }) => {
    const { image, eventName, eventType, price, description } = event;


    //Initialize AOS package 
    useEffect(() => {
        AOS.init({
            duration: 1200
        });
    }, [])


    return <div data-aos="fade-up" className='border p-5 rounded-lg'>
        <div className='h-[220px] relative'>
            <img className='block w-full h-full rounded-lg' src={image} alt="Image unavailable" />
            <span className='absolute top-1 left-1 bg-gray-300 font-bold text-sm px-1'>{eventType}</span>
        </div>
        <h3 className='text-xl font-extrabold my-3'>{eventName}</h3>
        <p className='font-bold text-white px-3 py-2 bg-[#041562] rounded-md'>{price}</p>
        <div className='my-3 text-gray-500 font-medium'>
            {
                description.length > 150 ? <p >{description.slice(0, 150)}....</p> : <p>{description}</p>
            }
        </div>
        <button className='w-full bg-blue-600 text-white font-bold  py-4 rounded-lg uppercase'>View Details</button>
    </div>
}

export default Event