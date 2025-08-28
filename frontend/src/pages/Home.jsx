import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Home/Hero'
import Sec1 from '../components/Home/Sec1'
import Sec2 from '../components/Home/Sec2'
import Sec3 from '../components/Home/Sec3'
import Sec4 from '../components/Home/Sec4'
import Form from '../components/Form'

const Home = () => {
    return (<>

        <Navbar />
        <Hero />
        <Sec1 />
        <Sec2 />
        <Sec3 />
        <Sec4 />
        <Form />
    </>)
}

export default Home