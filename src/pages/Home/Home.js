import React, { useEffect } from 'react'
import Banner from './Banner/Banner'
import Courses from '././Course/Courses'
import Reviews from './Reviews/Reviews'
import Quotation from './Custom/Custom'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div>
      <Banner></Banner>
      <div className='container mx-auto p-4'>
        <Courses></Courses>
        <Reviews></Reviews>
        <Quotation></Quotation>
      </div>
    </div>
  )
}

export default Home