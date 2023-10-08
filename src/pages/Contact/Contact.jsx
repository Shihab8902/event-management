import React from 'react'
import { Helmet } from 'react-helmet'
import contactBanner from '../../assets/images/contactBanner.jpg'
import { BiUser } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import facebook from "../../assets/images/facebook.png"
import whatsapp from "../../assets/images/whatsapp.png"
import email from "../../assets/images/email.png"
import Footer from '../../components/Footer/Footer';
import Swal from 'sweetalert2';

const Contact = () => {

    const handleContact = e => {
        e.preventDefault();
        Swal.fire({
            title: "Thank You!",
            text: "You message has been sent successfully! Our customer support team will reach to you within 1-2 working days.",
            icon: "success"
        });

        e.target.reset();
    }

    return <>
        <Helmet>
            <title>ByteX-Contact</title>
        </Helmet>

        <section className='flex  flex-col-reverse lg:flex-row lg:items-center container mx-auto my-20 p-5 '>
            <div className='flex-1 lg:px-20 md:py-10 rounded-xl'>
                <h3 className='font-bold text-xl md:text-4xl text-center mb-5'>Contact Us</h3> <hr />

                <form className='mt-7' onSubmit={handleContact} >

                    <div className='flex bg-white items-center border-2 border-slate-300 px-3 rounded-lg mb-5'>
                        <span className='text-gray-400 text-xl'><BiUser /></span>
                        <input className='w-full font-bold outline-none px-1 text-semibold py-4' type="text" name="name" id="name" required placeholder="Name" />
                    </div>


                    <div className='flex bg-white items-center border-2 border-slate-300 px-3 rounded-lg mb-5'>
                        <span className='text-gray-400 text-xl'><AiOutlineMail /></span>
                        <input className='w-full font-bold outline-none px-1 text-semibold py-4' type="email" name="email" id="email" required placeholder="Email" />
                    </div>

                    <div className='mb-4'>
                        <textarea className='w-full p-3  font-bold outline-none  text-semibold h-[250px] border-2 border-slate-300 resize-none rounded-lg' name="message" id="message" required placeholder='Message'></textarea>
                    </div>

                    <div >
                        <input className='w-full rounded-lg cursor-pointer  bg-blue-600 text-white font-bold py-4 ' type="submit" value="Send Message" />
                    </div>

                </form>

                <div className='mt-7'>
                    <h4 className='text-xl font-semibold'>Connect With-</h4>
                    <div className='flex gap-5 ml-12 mt-4'>
                        <button title='Facebook' className='text-3xl cursor-pointer'>
                            <img className='w-[40px]' src={facebook} alt="" />
                        </button>

                        <button title='WhatsApp' className='text-3xl cursor-pointer'>
                            <img className='w-[40px]' src={whatsapp} alt="" />
                        </button>

                        <button title='Email' className='text-3xl cursor-pointer'>
                            <img className='w-[40px]' src={email} alt="" />
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex-1'>
                <img src={contactBanner} />
            </div>
        </section>

        <Footer />
    </>
}

export default Contact