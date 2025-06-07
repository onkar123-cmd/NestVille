import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testimonial from '../components/Testimonial'
import RecommendedPropertys from '../components/RecommendedPropertys'

const Home = () => {
  return (
    <>
        <Hero/>
        <RecommendedPropertys/>
        <FeaturedDestination/>
        <ExclusiveOffers/>
        <Testimonial/>
    </>
  )
}

export default Home