import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Blog from './Blog';

import { Helmet } from 'react-helmet'
import Footer from '../../components/Footer/Footer';

const Blogs = () => {

    const blogs = useLoaderData();
    console.log(blogs)

    return <>

        <Helmet>
            <title>ByteX-blogs</title>
        </Helmet>

        <section className='p-5 container mx-auto'>
            <h1 className='text-xl md:text-5xl font-bold text-center my-12'>Blogs</h1> <hr />

            <div className='my-5 md:my-20'>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog} />)
                }
            </div>
        </section>

        <Footer />
    </>
}

export default Blogs