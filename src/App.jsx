import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import BigCard from './components/BigCard/BigCard'
import SmallCard from './components/SmallCard/SmallCard'
import HeroSection from './components/HeroSection/HeroSection'
import UniqueCard from './components/UniqueCard/UniqueCard'


function App() {
  const data1 =[
    {
      title1:'WixPro 72-Inch Responsive Website Builder',
      title2:'Main highlights',
      content1:' Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)',
      content2:'[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.',
      rating:9.8
    },
    {
      title1:'SiteCraft 68-Inch Ultimate Web Design Studio',
      title2:'Main highlights',
      content1:' Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)',
      content2:'[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.',
      rating:9.5
    },
    {
      title1:'WixPro 72-Inch Responsive Website Builder',
      title2:'Main highlights',
      content1:' Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)',
      content2:'[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.',
      rating:9.8
    },
  ]

  return (
    <>
  <div className='flex flex-col  gap-2 bg-[#FBFCFD]'>
    <Header/>
   
    <main className='flex justify-center place-items-center flex-col gap-11 '>
    <HeroSection/>

     {
      data1.map((item,indx)=>(
        <BigCard key={indx}
          itemNo={indx+1}
          title1={item.title1}
          title2={item.title2}
          content1={item.content1}
          content2={item.content2}
          rating={item.rating}
        />
      ))
     }
    
     <UniqueCard/>

      <div className='flex flex-col gap-3 '>
        <p className='font-[400] text-[32px] leading-[44px] text-[#2C384A] '>Related deals you might like for</p>
      <div className='flex gap-8 smallcardbox'>
      <SmallCard/>
      <SmallCard/>
      <SmallCard/>
      </div>
      </div>

      <div className=' bg-[#FBFCFD] h-[171px] flex  signupbox place-items-center gap-11 '>
        <h2 className='w-[398px] h-[88px] font-[400] text-[32px] text-[#5C6874] leading-[44px]'>Sign up and get exclusive special deals</h2>

        <div >
          <input type="text" className='w-[348px] h-[52px]  rounded-l-[12px] mt-2 bg-[#c2c9d0]' />
          <button className='w-[97px] h-[52px] rounded-r-[12px] bg-[#1B88F4]  '>Sign Up</button>
        </div>
      </div>
    </main>
   
    <Footer/>
    
    </div>
    </>
  )
}

export default App
