import React from 'react'
import checkImg from '../../assets/checkImg.png'
import ratingUpperImg from '../../assets/ratingUpperImg.png';
import arrow from '../../assets/arrow.png';
import vector from'../../assets/Vector.png'


function HeroSection() {
  return (
    <div className='flex herosectionbox flex-col gap-5'>
        <div className='flex flex-col gap-4'>
            <h1 className=' h-[60px] headingbox font-[400] text-[48px] text-[#2C384A] leading-[60px]'>Best Website builders in the US</h1>

            

            <div className='flex  border-[#E1E4E6] justify-between p-3 place-items-center border-t-2  border-b-2'>
                <div className='flex'>
                    <div className='flex gap-3'>
                        <img src={checkImg} alt="" 
                        className='w-[20px] h-[20px]'/>
                        <div className='flex'>
                        <span className='w-[93px] h-[20px] font-[400] text-[14px] text-[#4B5665] leading-[20px]'>Last Updated - </span>
                        <p className='w-[122px] h-[20px] font-[400] text-[#4B5665] text-[13px] leading-[20px]'> February 22, 2020</p> </div>
                    </div>

                    <div className='flex gap-2'>
                        <img src={ratingUpperImg} alt="" className='w-[20px] h-[20px]' />
                        <p className='w-[148px] h-[20px] font-[400] text-[14px] text-[#4B5665] leading-[20px]'> Advertising Disclosure </p>
                    </div>
                </div>


                <div className='flex'>
                    <p className='w-[86px] h-[20px] font-[400] text-[14px] text-[#727D87] leading-[20px]'> Top Relevant </p>
                    <img src={arrow} alt=""
                    className='w-[24px] h-[24px]' />
                </div>
            </div>
        </div>
        <div className='flex flex-col '>
            <div className='flex gap-8'>
                <a href="" className='w-[105px] h-[60px] font-[400] text-[14px] rounded-[12px] text-[#4B5665] leading-[20px]'>Tools
                </a>
                <a href="" className='w-[105px] h-[60px] font-[400] text-[14px] rounded-[12px] text-[#4B5665] leading-[20px]'>AWS Builder
                </a>
                <a href="" className='w-[105px] h-[60px] font-[400] text-[14px] rounded-[12px] text-[#4B5665] leading-[20px]'>Start Build
                </a>
                <a href="" className='w-[105px] h-[60px] font-[400] text-[14px] rounded-[12px] text-[#4B5665] leading-[20px]'>Build Supplies
                </a>
                <a href="" className='w-[105px] h-[60px] font-[400] text-[14px] rounded-[12px] text-[#4B5665] leading-[20px]'>Tooling
                </a>
                <a href="" className='w-[105px] h-[60px] font-[400] text-[14px] rounded-[12px] text-[#4B5665] leading-[20px]'>BlueHosting
                </a>
            </div>
            
        <div className='flex gap-6 place-items-center'>
            <span className='w-[39px] h-[20px] font-[400]  text-[15px] leading-[20px] text-[#727D87]'>Home</span>
            <img src={vector} alt="" className='w-[10px] h-[8.25px] ' />
            <span className='w-[100px] h-[20px] font-[400]  text-[15px] leading-[20px] text-[#727D87]'>Hosting for all</span>
            <img src={vector} alt="" className='w-[10px] h-[8.25px] ' />
            <span className='w-[39px] h-[20px] font-[400]  text-[15px] leading-[20px] text-[#727D87]'>Hosting</span>
            <img src={vector} alt="" className='w-[10px] h-[8.25px] ' />
            <span className='w-[45px] h-[20px] font-[400]  text-[15px] leading-[20px] text-[#727D87]'>Hosting6</span>
            <img src={vector} alt="" className='w-[10px] h-[8.25px] ' />
            <span className='w-[39px] h-[20px] font-[400]  text-[15px] leading-[20px] text-[#727D87]'>Hosting5</span>
        </div>
        </div>

    </div>
  )
}

export default HeroSection