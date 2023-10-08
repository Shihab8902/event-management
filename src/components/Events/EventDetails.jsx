import React from 'react'
import { json, useLoaderData, useLocation, useParams } from 'react-router-dom'
import { AiOutlineCheck } from 'react-icons/ai';
import { Helmet } from 'react-helmet';
import { getItemFromLS, setItemToLS } from '../../util/localStorage';
import Swal from 'sweetalert2';

const EventDetails = () => {
    const { id } = useParams();
    const idInt = parseInt(id);
    const events = useLoaderData();

    const selectedEvent = events.find(event => event.id === idInt);
    const { image, schedule_date, eventType, eventName, services, description, price } = selectedEvent;


    const handleEventBooking = () => {
        const existingEvents = getItemFromLS();

        if (!existingEvents.includes(id)) {
            setItemToLS(id);
            Swal.fire({
                title: "Success",
                text: "You have successfully booked the event!",
                icon: "success"
            })
        } else {
            Swal.fire({
                title: "Error",
                text: "You have already booked this event!",
                icon: "error"
            })
        }
    }

    return <>

        <Helmet>
            <title>{eventName}</title>
        </Helmet>

        <div className='mt-12 mb-20 container mx-auto'>
            <div>
                <img className='w-full max-h-[500px] rounded-lg' src={image} alt="Image unavailable" />
            </div>
            <div>
                <div className='text-right text-sm text-gray-500'>
                    <p>{eventType}</p>
                    <p>Live on: {schedule_date}</p>
                </div>

                <h3 className='border-b-2 py-5 text-center font-extrabold text-2xl md:text-4xl'>{eventName}</h3>

                <div className='my-5'>
                    <h4 className='text-xl md:text-2xl font-bold'>Event Features-</h4>
                    <ul className='ml-10'>
                        {
                            services.map((service, idx) => <li key={idx} className='flex items-center gap-3 mt-4 font-semibold '><AiOutlineCheck className='text-green-700' /> {service}</li>)
                        }
                    </ul>
                </div>

                <p className=' leading-9 text-justify my-10 font-semibold '>{description}</p>

                <div>
                    <button onClick={handleEventBooking}
                        className='bg-blue-700 w-full py-5 rounded-lg text-white font-bold text-lg uppercase'> Book Event - <span>{price}</span></button>
                </div>
            </div>
        </div>


    </>
}

export default EventDetails