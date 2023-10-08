import React from 'react'
import { useNavigate } from 'react-router-dom';

const Booking = ({ event }) => {
    const { image, eventName, description, id } = event;

    const navigate = useNavigate();

    return <div className='flex flex-col md:flex-row justify-between gap-4 p-5 border-2 rounded-lg '>
        <div className='w-full md:w-2/6 h-[160px] '>
            <img className='w-full block h-full' src={image} alt="Image unavailable" />
        </div>

        <div className="w-full md:w-2/3">
            <h3 className='font-bold mb-2 text-xl '>{eventName}</h3>
            <small className='text-gray-500'>
                {
                    description.length > 150 ? description.slice(0, 150) + "...." : description
                }
            </small>
            <div className='text-right'>
                <button onClick={() => navigate(`/event/${id}`)}
                    className='bg-blue-600 mt-3  text-white font-bold uppercase text-sm px-4 py-3 rounded-md'>Show Details</button>
            </div>
        </div>
    </div>
}

export default Booking