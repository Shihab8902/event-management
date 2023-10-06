import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import slider1 from "../../assets/images/slider1.jpg"
import slider2 from "../../assets/images/slider2.jpg"
import slider3 from "../../assets/images/slider3.jpg"

const Banner = () => {
    return (
        <Carousel className='my-10 rounded-2xl'
            infiniteLoop={true}
            autoPlay={true}
            showThumbs={false}
        >
            <div className=' relative  md:h-[400px] lg:h-[600px]'>
                <img className='block h-full rounded-2xl z-10' src={slider1} alt="Image 1" />
                <p className="absolute bottom-5 left-0 right-0 bg-gray-200 font-bold text-xl md:text-5xl lg:text-7xl text-center p-1 md:p-4"> Tech Conferences and Expos  </p>


            </div>
            <div className='relative  md:h-[400px] lg:h-[600px]'>
                <img className='block h-full rounded-2xl' src={slider2} alt="Image 1" />
                <p className="absolute bottom-5 left-0 right-0 bg-gray-200 font-bold text-xl  md:text-5xl lg:text-7xl text-center p-1 md:p-4"> Gaming Conventions  </p>
            </div>
            <div className='relative  md:h-[400px]  lg:h-[600px]'>
                <img className='block h-full rounded-2xl' src={slider3} alt="Image 1" />
                <p className="absolute bottom-5 left-0 right-0 bg-gray-200 font-bold text-xl md:text-5xl lg:text-7xl text-center p-1 md:p-4"> Hackathons  </p>

            </div>
        </Carousel >
    )
}

export default Banner