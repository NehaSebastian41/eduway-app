import React from 'react'
import Banner from '../components/Banner'
import Saved from './Saved'
import FavGroup from './FavGroup'
import PromoBanner from './PromoBanner'
import Other from './Other'
import Review from './Review'

const Home = () => {
  return (
  <div>
    <Banner/>
    <Saved/>
    <FavGroup/>
    <PromoBanner/>
    <Other/>
    <Review/>
  </div>
  )
}

export default Home
