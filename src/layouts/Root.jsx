import React from 'react'
import { Outlet } from 'react-router-dom'

const Root = () => {
    return <div className='container mx-auto px-5'>
        <Outlet />
    </div>
}

export default Root