import React, { useEffect, useState } from 'react'
import Review from './Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    //fetch client review
    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(error => console.log(error))
    }, [])


    return <div className='mt-28 px-5'>
        <h3 className='text-3xl md:text-5xl font-bold text-center '>What Clients Say</h3>
        <p className='text-center font-semibold  text-gray-500 my-5'> ByteX turn millions of clients tech, gaming, and coding events into unforgettable experiences.  <br />
            Read what they have to say about our event management services.</p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-12'>
            {
                reviews.map((review, idx) => <Review key={idx} review={review} />)
            }
        </div>
    </div>
}

export default Reviews