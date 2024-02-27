import React from 'react'
import checkImg from '../../assets/checkImg2.png'
import download from '../../assets/download.png';
import ratingUpperImg from '../../assets/ratingUpperImg.png'
import starImg from '../../assets/starImg.png'
import Button from '../Button';


function UniqueCard() {
    return(
    <div className='flex text-black w-[900px]  h-[320px]   uniqueCardbox gap-10 rounded-[12px] '>
    <div className='flex flex-col place-items-center gap-[0.8rem] pt-5 '>
        <div className='w-[44px] h-[44px]  mr-28 border rounded-[9999px] flex justify-center place-items-center border-[#E1E4E6] text-[20px] text-[#626E79] front-[400]'>4</div>
        <img src={download} alt="" className='w-[250px] h-[110px] uniquecardImg' />
        <span className=' leading-[20px] text-[13px] font-[400] text-[#626E79]'>Builder 1</span>
    </div>
    <div className='flex flex-col gap-1'>
        <p className='font-[400] leading-[24px] text-[16px] text-[#4B5665]'>
            <span className='text-[#2C384A] font-[700]'>CDK Resposive Builder:</span>
            An extensive library of widgets and apps, and detailed step-by-step guides
        </p>

        <p className='font-[400] leading-[24px] text-[16px] text-[#4B5665] flex flex-col gap-2'>
            <div className='flex flex-col gap-1.5'>
            <span className='text-[#2C384A] font-[700]'>Main highlights</span>

        <div className=' ps-4'>   
        <div className='flex  place-items-center'>
            <button className='w-[40px] h-[28px] text-[16px] rounded-[4px]  items-center font-[400] leading-[24px] text-[#1B88F4] bg-[#ffff]'>9.9</button>
            <p className='w-[196px] h-[24px] font-[400] text-[15px] text-[#4B5665] leading-[24px]'>Building Responsive</p>
        </div>
        <div  className='flex  place-items-center'> <button className='w-[40px] h-[28px] text-[16px] rounded-[4px]  items-center font-[400] leading-[24px] text-[#1B88F4] bg-[#ffff]'>8.9</button>
            <p className='w-[196px] h-[24px] font-[400] text-[15px] text-[#4B5665] leading-[24px]'>Cool</p></div>
        <div  className='flex  place-items-center'> <button className='w-[40px] h-[28px] text-[16px] rounded-[4px]  items-center font-[400] leading-[24px] text-[#1B88F4] bg-[#ffff]'>8.9</button>
            <p className='w-[196px] h-[24px] font-[400] text-[15px] text-[#4B5665] leading-[24px]'>Docs</p></div>
         </div> </div>


        <div className='flex flex-col'>
        <span className='w-[112px] h-[24px] text-[16px]    font-[400] leading-[24px] text-[#2C384A]'>Why we love it</span>
            <div className='flex gap-2'>
                <img src={checkImg} alt=""  className='w-[24px] h-[24px]'/>
                <span className='w-[178px] h-[24px] text-[15px]    font-[400] leading-[24px] text-[#4B5665]'>Documentation</span>
            </div>
            <div className='flex gap-2'>
            <img src={checkImg} alt=""  className='w-[24px] h-[24px]'/>
                <span className='w-[178px] h-[24px] text-[15px]    font-[400] leading-[24px] text-[#4B5665]'>Easy Out</span>
            </div>
            <div className='flex gap-2'>
            <img src={checkImg} alt=""  className='w-[24px] h-[24px]'/>
                <span className='w-[178px] h-[24px] text-[15px] font-[400] leading-[24px] text-[#4B5665]'>Out Of Box</span>
            </div>
        </div>

    <a href="#">   <p className='text-[16px] text-[#1B88F4] font-[400] leading-[24px]'>Show more</p></a> 
        </p> 


    </div>

    <div className='flex flex-col ratingbox  place-items-center gap-[3.5rem] '>
        <div className='w-[135px]  h-[118px] top-[347px] left-[1099px]
    flex flex-col place-items-center gap-[0.2rem] bg-[#F3F9FF]  rounded-b-[12px]'>
        <img src={ratingUpperImg} className='w-[13px] h-[13px]  self-end mr-[2rem]  mt-2'  alt="" />
            <span className='font-[400] text-[32px] text-[#074786] leading-[48px]'>9.8</span>
             
           <p className='font-[400] text-[14px] text-[#074786] leading-[20px]'>Exceptional</p> 
            <img src={starImg} alt=""
                className='w-[66px] h-[11px] top-[435px] left-[1134px]' />
        </div>

        <Button className={'w-[232px]'} content={'View'}/>
    </div>
</div> )
}

export default UniqueCard
