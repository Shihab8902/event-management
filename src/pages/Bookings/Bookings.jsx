import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { getItemFromLS } from '../../util/localStorage';
import Booking from './Booking';
import { Helmet } from 'react-helmet';

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

        <Helmet>
            <title>ByteX-bookings</title>
        </Helmet>

        {
            bookedEvents.length > 0 ?
                <div className='my-14 grid grid-cols-1 lg:grid-cols-2 gap-6 p-5 container mx-auto'>
                    {
                        bookedEvents.map(event => <Booking key={event.id} event={event} />)
                    }
                </div> :
                <h3 className='text-2xl container mx-auto font-bold my-20 text-center text-gray-500'>You have no active booking at this moment</h3>
        }

    </>
}

export default Bookings