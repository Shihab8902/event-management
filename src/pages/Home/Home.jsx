import React from 'react'
import Nav from '../../components/Nav/Nav'
import Banner from '../../components/Banner/Banner'
import { Helmet } from 'react-helmet'
import Events from '../../components/Events/Events'

const Home = () => {
    return <section>
        <Helmet>
            <title>ByteX-home</title>
        </Helmet>


        <Nav />
        <Banner />
        <Events />
    </section>
}

export default Home