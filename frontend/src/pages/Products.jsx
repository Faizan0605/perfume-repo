import React from 'react'
import Product from '../components/product/Product'
import Form from '../components/Form'
import Hero from '../components/product/Hero'
import Navbar from '../components/Navbar'

const Products = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Product />
            <Form />
        </>
    )
}

export default Products