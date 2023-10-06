import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {

    const navigate = useNavigate();

    return <div className='md:h-screen flex flex-col justify-center items-center'>
        <h4 className='text-7xl font-bold '>404</h4>
        <p className='text-xl font-semibold my-4'>The page you are looking for, doesn't exist!</p>
        <button onClick={() => navigate(-1)}
            className='bg-green-600 text-white font-bold text-lg px-7 py-3 rounded-lg'>Go Back</button>
    </div>
}

export default Error