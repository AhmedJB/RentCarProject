import React from 'react'
import Footer from '../../components/Footer';
import Header from '../../components/General/Header';
import HomePageComponent from '../../components/HomePageComponent';
import Testimonials from '../../components/Testimonials';


function Homepage() {
  return (
	<>
  
    <Header home={true} />
    <HomePageComponent />
    <Testimonials/>
    <Footer/>
    
  </>
  )
}

export default Homepage;