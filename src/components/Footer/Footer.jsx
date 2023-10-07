import React from 'react'
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineCheck } from 'react-icons/ai';

import { BiLogoFacebookCircle } from 'react-icons/bi';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { BsPinterest } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className=' bg-[#161D6F] mt-20 pt-16 pb-6 px-8'>
            <div className='flex justify-between flex-col lg:flex-row gap-10 lg:gap-0'>

                <div>
                    <h3 className='text-2xl font-extrabold text-white'>Coverage Areas</h3>
                    <div className='w-[200px] h-[2px] mt-2 bg-white'></div>

                    <ul className='text-white mt-5 flex flex-col md:flex-row  md:justify-between md:gap-14'>
                        <div>
                            <li className='flex items-center text-lg font-semibold gap-2 mt-3'><CiLocationOn />California</li>
                            <li className='flex items-center text-lg font-semibold gap-2 mt-3'><CiLocationOn />Texas</li>
                            <li className='flex items-center text-lg font-semibold gap-2 mt-3'><CiLocationOn />New York</li>
                            <li className='flex items-center text-lg font-semibold gap-2 mt-3'><CiLocationOn />Florida</li>
                            <li className='flex items-center text-lg font-semibold gap-2 mt-3'><CiLocationOn />Illinois</li>
                        </div>

                        <div>
                            <li className='flex items-center text-lg font-semibold gap-2 mt-3'><CiLocationOn />Washington DC</li>
                            <li className='flex items-center text-lg font-semibold gap-2 mt-3'><CiLocationOn />Ohio</li>
                            <li className='flex items-center text-lg font-semibold gap-2 mt-3'><CiLocationOn />Michigan</li>
                            <li className='flex items-center text-lg font-semibold gap-2 mt-3'><CiLocationOn />Georgia</li>
                            <li className='flex items-center text-lg font-semibold gap-2 mt-3'><CiLocationOn />Colorado</li>
                        </div>
                    </ul>
                </div>

                <div>
                    <h3 className='text-2xl font-extrabold text-white'>Event & Exhibition Logistic</h3>
                    <div className='md:w-[330px] h-[2px] mt-2 bg-white'></div>
                    <ul className='text-white mt-5 '>
                        <li className='flex items-center font-semibold gap-2 mt-3'><AiOutlineCheck />Aluminum German Hanger</li>
                        <li className='flex items-center font-semibold gap-2 mt-3'><AiOutlineCheck />Event Technology</li>
                        <li className='flex items-center font-semibold gap-2 mt-3'><AiOutlineCheck />Logistics and Shipping</li>
                        <li className='flex items-center font-semibold gap-2 mt-3'><AiOutlineCheck />Catering and Refreshments</li>
                        <li className='flex items-center font-semibold gap-2 mt-3'><AiOutlineCheck />Waste Management</li>
                        <li className='flex items-center font-semibold gap-2 mt-3'><AiOutlineCheck />All Rental Items</li>
                    </ul>
                </div>

                <div>
                    <h3 className='text-2xl font-extrabold text-white'>Socials</h3>
                    <div className='w-[200px] h-[2px] mt-2 bg-white'> </div>

                    <ul className='text-white mt-5 '>
                        <li className='flex items-center font-semibold gap-2 mt-3 hover:underline'><BiLogoFacebookCircle className='text-3xl' /> <a href="#">Facebook</a></li>
                        <li className='flex items-center font-semibold gap-2 mt-3 hover:underline'><AiFillTwitterCircle className='text-3xl' /> <a href="#">Twitter</a></li>
                        <li className='flex items-center font-semibold gap-2 mt-3 hover:underline'><TiSocialLinkedinCircular className='text-3xl' /> <a href="#">Linkedin</a></li>
                        <li className='flex items-center font-semibold gap-2 mt-3 hover:underline'><BsPinterest className='text-3xl' /> <a href="#">Pinterest</a></li>
                        <li className='flex items-center font-semibold gap-2 mt-3 hover:underline'><AiOutlineInstagram className='text-3xl' /> <a href="#">Instagram</a></li>
                    </ul>

                </div>
            </div>

            <p className='text-white text-center tracking-wide font-bold mt-12'>Copyright &copy;  2023 ByteX. All right reserved.</p>
        </footer>
    )
}

export default Footer