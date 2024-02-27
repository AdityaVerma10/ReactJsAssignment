import React from 'react'
import download from '../../assets/download.png';
import Button from '../Button';


function SmallCard() {
  return (
    <div className=' w-[300px] h-[425px] top-[1806px] left-[300px] rounded-[12px] bg-[#FFFFFF]
     flex flex-col gap-2  justify-center'>

    <img src={download} alt=""
    className='w-[141px] h-[103px] top-[1843px] left-[396px] self-center mb-8' />

    <div className='flex gap-2'>
        <span className='w-[69px] h-[28px] text-center rounded-[8px] bg-[#F2F4F7] font-[400] text-[13px] leading-[20px] text-[#074786]'>
        20% Off
        </span>
        <span className='w-[107px] h-[28px] text-center rounded-[8px] bg-[#F2F4F7] font-[400] text-[14px] leading-[20px] text-[#074786]'>
        Limited time 
        </span>
    </div>

    <span className='font-[700] text-[#626E79] text-[16px] leading-[24px] self-center
    '>
    Webbuilder 1
    </span>

    <p className=' w-[284px] h-[48px] font-[400] text-[16px] leading-[24px] text-[#626E79]'>
    Computer  Modern clasic with wix support
    </p>

    <div className='flex flex-col  offerbox gap-3'>
    <div className='flex gap-1'>
        <span className='w-[71px] h-[28px] font-[400] text-[20px] text-[#5C6874] leading-[28px]'>
        $39.96
        </span>
        <span className='w-[48px] h-[20px] font-[400] text-[14px] text-[#9FA9B3] leading-[20px] mt-2'>
        $49.96
        </span>
        <span className='w-[63px] h-[20px] font-[400] text-[13px] text-[#EF4C5D] leading-[20px] mt-2'>
        (20% Off)
        </span>
        </div>

  
<Button className={'w-[292px]'} content={'View Deal'}/>
    </div>

    </div>
  )
}

export default SmallCard
