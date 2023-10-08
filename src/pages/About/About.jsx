import React from 'react'

import Footer from '../../components/Footer/Footer'
import { Helmet } from 'react-helmet'

const About = () => {
    return <>
        <Helmet>
            <title>ByteX-about </title>
        </Helmet>

        <section className='my-20 lg:px-40 px-5 container mx-auto'>
            <h1 className='text-2xl md:text-5xl text-center font-bold'>About Us</h1>
            <p className='text-center my-5 text-lg text-gray-500'>Welcome to ByteX - Your Premier Event Management Partner!</p> <hr />


            <div className='mt-10'>
                <h3 className='text-xl md:text-3xl text-center font-bold'>Who We Are</h3>
                <p className=' mt-3  text-lg leading-9 text-gray-500'>At ByteX, we are passionate about creating unforgettable experiences. We are an innovative event management company that specializes in curating and orchestrating extraordinary events in the world of technology, gaming, and innovation. With a team of dedicated professionals, we transform your ideas into reality, leaving a lasting impression on your attendees.</p>
            </div>

            <div className='mt-10'>
                <h3 className='text-xl md:text-3xl text-center font-bold'>Our Mission</h3>
                <p className=' mt-3  text-lg leading-9 text-gray-500'>Our mission is simple: to elevate your event to the next level. We strive to be the driving force behind your success, ensuring that every detail is meticulously planned and flawlessly executed. We believe that great events are the result of creative thinking, precise coordination, and unwavering dedication.</p>
            </div>

            <div className='mt-10'>
                <h3 className='text-xl md:text-3xl text-center font-bold'>What Sets Us Apart</h3>

                <div>
                    <h4 className='text-lg mt-5 mb-3 md:text-2xl font-bold'>Expertise</h4>
                    <p className=' mt-3  text-lg leading-9 text-gray-500'>Our team is composed of industry experts who have a deep understanding of the unique requirements and challenges of tech conferences, gaming conventions, and hackathons. With years of experience, we bring unmatched expertise to every project.</p>
                </div>

                <div>
                    <h4 className='text-lg mt-5 mb-3 md:text-2xl font-bold'>Creativity</h4>
                    <p className=' mt-3  text-lg leading-9 text-gray-500'>Creativity is at the core of what we do. We are constantly pushing the boundaries of what's possible, introducing innovative concepts, and designing immersive experiences that captivate your audience. Whether it's a cutting-edge tech showcase or a thrilling gaming event, our creativity knows no bounds.</p>
                </div>

                <div>
                    <h4 className='text-lg mt-5 mb-3 md:text-2xl font-bold'>Tailored Solutions</h4>
                    <p className=' mt-3  text-lg leading-9 text-gray-500'>We understand that every event is unique, and we approach each project with a fresh perspective. Our solutions are tailored to your specific needs, ensuring that your event stands out and achieves its objectives.</p>
                </div>

                <div>
                    <h4 className='text-lg mt-5 mb-3 md:text-2xl font-bold'>Client-Centric Approach</h4>
                    <p className=' mt-3  text-lg leading-9 text-gray-500'>Your satisfaction is our top priority. We believe in open communication, collaboration, and building long-lasting partnerships. We work closely with you to understand your vision and objectives, and we go above and beyond to exceed your expectations.</p>
                </div>

            </div>


        </section>

        <Footer />
    </>
}

export default About