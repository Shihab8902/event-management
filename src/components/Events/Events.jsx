import React, { useEffect, useState } from 'react'
import Event from './Event';

const Events = () => {

    const [events, setEvents] = useState([]);



    //fetch event data
    useEffect(() => {
        fetch("events.json")
            .then(res => res.json())
            .then(data => setEvents(data))
            .catch(error => console.log(error))
    }, [])


    console.log(events)




    return <div className='mt-28 px-5'>
        <h3 className='text-3xl md:text-5xl font-bold text-center '>Our Services</h3>
        <p className='text-center font-semibold  text-gray-500 my-5'>Turn your visions into memorable events with our services. <br />
            Let's Create Your Perfect Experience!</p>


        <div data-aos="fade-up" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
            {
                events.map(event => <Event key={event.id} event={event} />)
            }
        </div>

    </div>
}

export default Events