import React, { useEffect } from 'react'
import ReactStars from "react-rating-stars-component";

import AOS from 'aos';
import 'aos/dist/aos.css';


const Review = ({ review }) => {
    const { image, clientName, clientOccupation, description, ratings } = review;

    //Initialize AOS package 
    useEffect(() => {
        AOS.init({
            duration: 1200
        });
    }, [])

    return <div data-aos="flip-left" className='shadow-2xl py-10 px-5 rounded-lg'>
        <img className='w-[120px] mx-auto block h-[120px] rounded-full' src={image} alt="" />
        <div className='mt-10'>
            <h3 className='text-center text-2xl font-bold'>{clientName}</h3>
            <p className='text-center text-sm font-semibold text-gray-500'>{clientOccupation}</p>
            <div className='flex justify-center mt-5'>
                <ReactStars
                    count={5}
                    edit={false}
                    size={32}
                    value={ratings}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                />,
            </div>
            <p className='text-gray-500 font-medium text-sm leading-7 mt-4'>{description}</p>
        </div>
    </div>
}

export default Review