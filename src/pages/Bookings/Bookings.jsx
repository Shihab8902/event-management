import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { getItemFromLS } from '../../util/localStorage';
import Booking from './Booking';

const Bookings = () => {
    const events = useLoaderData();
    const selectedEventsId = getItemFromLS();


    const bookedEvents = [];

    for (let id of selectedEventsId) {
        const idInt = parseInt(id);
        const selectedEvent = events.find(event => event.id === idInt);
        bookedEvents.push(selectedEvent);
    }

    console.log(bookedEvents);




    return <>

        <div className='my-14 grid grid-cols-1 lg:grid-cols-2 gap-6 p-5'>
            {
                bookedEvents.map(event => <Booking key={event.id} event={event} />)
            }
        </div>

    </>
}

export default Bookings