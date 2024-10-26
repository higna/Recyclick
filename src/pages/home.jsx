import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1 className='text-4xl font-bold mt-10'>Welcome to Recyclick!</h1>
      
      <Footer />
    </div>
  )
}

export default Home