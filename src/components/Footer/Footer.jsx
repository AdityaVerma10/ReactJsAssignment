import React from 'react'

function Footer() {
  return (
    <div className='w-screen h-[452px] top-[2432px] left-[11px] bg-[#212731]
    flex footerbox  place-items-center justify-center  gap-44'>

    
    <ul className='flex flex-col gap-4' >
       <a href='#<a>'> <span className='text-[#FFFFFF] leading-[24px] text-[16px]'>Categories</span></a>
       <a href='#'> <li className=' text-[#B6BDC4] leading-[20px] text-[13px]'>Web Builder</li></a>
       <a href='#'><li className=' text-[#B6BDC4] leading-[20px] text-[13px]'>Hosting</li></a>
       <a href='#'> <li className=' text-[#B6BDC4] leading-[20px] text-[13px]'>Data Center</li></a>
       <a href='#'> <li className=' text-[#B6BDC4] leading-[20px] text-[13px]'>Robotic-Automation</li></a>
 
    </ul>

    <ul className='flex flex-col gap-4  mt-10 '>
        <a href='#'><span className='text-[#FFFFFF] leading-[24px] text-[16px]'>Contact</span></a>
        <a href='#'><li className=' text-[#B6BDC4] leading-[20px] text-[13px]'>Contact</li></a>
        <a href='#'><li className=' text-[#B6BDC4] leading-[20px] text-[13px]'>Privacy Policy</li></a>
        <a href='#'><li className=' text-[#B6BDC4] leading-[20px] text-[13px]'>Terms of Service</li></a>
        <a href='#'><li className=' text-[#B6BDC4] leading-[20px] text-[13px]'>Categories</li></a>
        <a href='#'><li className=' text-[#B6BDC4] leading-[20px] text-[13px]'>About</li></a>
 
    </ul>

 
    <select name="contury" id="contury" className=' text-[#D1D6DA] bg-[#212731] border-none '>
        <option value="United State" className=' text-[#D1D6DA] leading-[20px] text-[13px]
' >United States</option>
    </select>

    </div>
  )
}

export default Footer