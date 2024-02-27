import React from 'react'
import download from '../../assets/download.png';
import ratingUpperImg from '../../assets/ratingUpperImg.png'
import starImg from '../../assets/starImg.png'
import Button from '../Button';
import image from '../../assets/IMAGE (6).png'
import image2 from '../../assets/IMAGE (7).png'
function BigCard({
    itemNo,
    title1,
    title2,
    content1,
    content2,
    rating
}) {
    return (
        <div className='flex text-black w-[900px] bigcardbox  h-[255px]  gap-10 rounded-[12px] '>
            <div className='flex flex-col place-items-center gap-[0.8rem] pt-5 '>
            
                {itemNo==1?   <div className='BestthingsBox rounded-r-[8px] flex '>
                    <img src={image} alt="" />
                    <span>Best Choice</span>
                </div>:null}
                {itemNo==2?   <div className='BestthingsBox rounded-r-[8px] flex '>
                    <img src={image2} alt="" />
                    <span>Best Value</span>
                </div>:null}
                <div className='w-[44px] h-[44px]  mr-28 border rounded-[9999px] flex justify-center place-items-center border-[#E1E4E6] text-[20px] text-[#626E79] front-[400]'>{itemNo}</div>
                <img src={download} alt="" className='w-[400px] h-[110px] BigcardImg ' />
                <span className=' leading-[20px] text-[13px] font-[400] text-[#626E79]'>Builder 1</span>
            </div>
            <div className='flex flex-col gap-1'>
                <p className='font-[400] leading-[24px] text-[16px] text-[#4B5665]'>
                    <span className='text-[#2C384A] font-[700]'>{title1}-</span>
                    {content1}
                </p>

                <p className='font-[400] leading-[24px] text-[16px] text-[#4B5665] flex flex-col gap-2'>
                    <div className='flex flex-col gap-1.5'>
                    <span className='text-[#2C384A] font-[700]'>{title2}</span>

                <div className=' ps-4'>   {content2} </div> </div>

            <a href="#">   <p className='text-[16px] text-[#1B88F4] font-[400] leading-[24px]'>Show more</p></a> 
                </p> 

        
            </div>

            <div className='flex flex-col ratingbox place-items-center gap-[5rem] '>
                <div className='w-[135px]  h-[118px] top-[347px] left-[1099px]
            flex flex-col place-items-center gap-[0.2rem] bg-[#F3F9FF]  rounded-b-[12px]'>
                <img src={ratingUpperImg} className='w-[13px] h-[13px]  self-end mr-[2rem]  mt-2'  alt="" />
                    <span className='font-[400] text-[32px] text-[#074786] leading-[48px]'>{rating}</span>
                     
                   <p className='font-[400] text-[14px] text-[#074786] leading-[20px]'>Exceptional</p> 
                    <img src={starImg} alt=""
                        className='w-[66px] h-[11px] top-[435px] left-[1134px]' />
                </div>

           
                <Button width={232}
                 content={'View'}/>
            </div>
        </div>
    )
}

export default BigCard


