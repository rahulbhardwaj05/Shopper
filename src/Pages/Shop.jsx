import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import Newcollection from '../Components/NewCollections/Newcollection'
import NewsLetter from '../Components/NewsLetters/NewsLetter'
// import Footer from '../Components/Footer/Footer' kuv


function Shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <Newcollection/>
     <NewsLetter/>
     {/* <Footer/> */}
    </div>
  )
}

export default Shop