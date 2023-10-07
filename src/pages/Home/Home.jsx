import React from 'react'
import Nav from '../../components/Nav/Nav'
import Banner from '../../components/Banner/Banner'
import { Helmet } from 'react-helmet'
import Events from '../../components/Events/Events'
import Reviews from '../../components/Reviews/Reviews'
import FAQ from '../../components/FAQ/FAQ'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return <section>
        <Helmet>
            <title>ByteX-home</title>
        </Helmet>



        <Banner />
        <Events />
        <Reviews />
        <FAQ />
        <Footer />
    </section>
}

export default Home