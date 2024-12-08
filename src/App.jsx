import React from 'react'
import Header from './component/Header'
import ImageSlider from './pages/Home'
import AboutFitness from './pages/AboutFitness'
import FeaturedClasses from './pages/FeatureClass'
import BeingBody from './pages/BeingBody'
import ClassShedule from './pages/ClassShedule'
import Testimonials from './pages/Testimonials'
import Footer from './pages/Footer'


function App() {
  return (
    <>
      <Header />
      <ImageSlider />
      <AboutFitness />
      <FeaturedClasses />
      <BeingBody />
      <ClassShedule />
      <Testimonials />
      <Footer/>
    </>
  )
}

export default App