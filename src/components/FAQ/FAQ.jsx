import React from 'react'

const FAQ = () => {
    return <div className='px-5'>
        <h3 className='text-3xl font-bold  text-center mt-20'>Frequently Asked Questions (FAQ)</h3>

        <div className='my-10'>
            <div className="collapse collapse-plus bg-base-100 mb-3">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-lg font-bold">
                    What is event management, and why is it important?
                </div>
                <div className="collapse-content">
                    <p><span className='font-bold leading-8'>Answer:</span>Event management involves planning, organizing, and executing events, conferences, and gatherings. It's crucial for ensuring that events run smoothly, meet objectives, and leave a positive impression on attendees. Event managers handle logistics, coordination, and various aspects to make events successful.</p>
                </div>
            </div>

            <div className="collapse collapse-plus bg-base-100 mb-3">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-lg font-bold">
                    What services do event management companies typically offer?
                </div>
                <div className="collapse-content">
                    <p><span className='font-bold leading-8'>Answer:</span>Event management companies provide a range of services, including event planning, venue selection, budget management, marketing and promotion, logistics, audio-visual support, registration and ticketing, and post-event analysis. They tailor their services to meet the specific needs of clients and events.</p>
                </div>
            </div>


            <div className="collapse collapse-plus bg-base-100 mb-3">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-lg font-bold">
                    How do I choose the right event management company for my event?
                </div>
                <div className="collapse-content">
                    <p><span className='font-bold leading-8'>Answer:</span>When selecting an event management company, consider their experience in your event type or industry, client testimonials, portfolio, and ability to handle your event's size and complexity. Discuss your event objectives and expectations to ensure alignment with the chosen company's capabilities.</p>
                </div>
            </div>



            <div className="collapse collapse-plus bg-base-100 mb-3">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-lg font-bold">
                    What are the key factors to consider when planning a successful event?
                </div>
                <div className="collapse-content">
                    <p><span className='font-bold leading-8'>Answer:</span>Successful event planning involves factors such as defining clear objectives, setting a budget, selecting an appropriate venue, creating a detailed timeline, effective marketing and promotion, engaging content or activities, efficient logistics, contingency plans, and post-event evaluation to identify areas for improvement.</p>
                </div>
            </div>



        </div>
    </div>
}

export default FAQ