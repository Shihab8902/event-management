import React from 'react'
import { Helmet } from 'react-helmet';
import { BsCalendarDate } from 'react-icons/bs';
import { useLoaderData, useParams } from 'react-router-dom'

const BlogDetails = () => {

    const blogs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    const selectedBlog = blogs.find(blog => blog.id === idInt);
    const { title, image, publish_date, description } = selectedBlog;
    console.log(selectedBlog);



    return <>
        <Helmet>
            <title>{title}</title>
        </Helmet>

        <div className='my-20 p-5 container mx-auto'>
            <div className='h-[200px] md:h-[500px]'>
                <img className='w-full block h-full rounded-lg' src={image} alt="Image unavailable" />
            </div>
            <div>
                <p className='flex justify-end items-center gap-2 font-medium text-gray-500 text-sm mt-2'><BsCalendarDate /> {publish_date}</p>

                <h3 className='text-xl mt-10 md:text-3xl font-bold'>{title}</h3>
                <p className='mt-6 leading-8 font-semibold text-gray-500'>{description}</p>
            </div>
        </div>

    </>
}

export default BlogDetails