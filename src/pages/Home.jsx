import React from 'react'
import Navbar from '../componets/Navbar'
import Header from '../componets/Header'
import Hero from '../componets/Hero'
import Business from '../componets/Business'
import Stats from '../componets/Stats'
import Footer from '../componets/Footer'


const Home = () => {
  return (
    <section >
      <div>
        <Navbar />
        <Header />
        <Hero />
        <Stats />
        <Business />
        <Footer />
       

      </div>

    </section>
  )
}

export default Home