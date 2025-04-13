import React from 'react'
import SEOHelmet from '../Components/SEO/SeoHelmet'
import slidesData from '../Utils/slidesData'
import HeroSection from '../Components/HeroSection'
import DiscountBannerSection from '../Components/DiscountBannerSection'
import Product from '../Components/Product'
import BannerDivider from '../Components/BannerDivider'
import VideoSection from '../Components/VideoSection'

const Home = () => {
  return (
  <>
   <SEOHelmet
        title="Home | Herbal Science"
        description="Welcome to Herbal Science — Discover nature's wellness products handcrafted with care."
      />
       <div>
       <HeroSection slides={slidesData} />
       <DiscountBannerSection/>
       <Product/>
       <BannerDivider/>
       <Product/>
       <Product/>
       <VideoSection/>
       <Product/>
       <DiscountBannerSection/>
       <BannerDivider/>
       <BannerDivider/>
       
     
      </div>
  </>
  )
}

export default Home
