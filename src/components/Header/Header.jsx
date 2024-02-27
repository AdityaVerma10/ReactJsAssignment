import React from 'react'
import SearchIcon from '../../assets/Search.png';
function Header() {
  return (
    <div className=' w-screen navheadbox h-[64px] bg-[#212731] flex  place-items-center justify-center  gap-20  '>

    <div >
        <img src={SearchIcon} alt=""
        className=' ms-2 mt-2 w-[24px] h-[24px] absolute' />
        <input
        className='w-[258px] h-[37px]   text-black border rounded-[8px]  border-[#E1E4E6]' 
        
        type="text"
         />

    </div>

    <span className='menubtn'>Menu</span>

        <ul className='flex gap-11  navbox text-[18px]'>
            <a href="#"><li className='text-[#D1D6DA] leading-[20px]'>Categories</li></a>
           <a href='#'> <li className='text-[#D1D6DA] leading-[20px]'>Website Builders</li> </a>
           <a href='#'> <li className='text-[#D1D6DA] leading-[20px]'>Today's deals</li> </a>

        </ul>

    </div>
  )
}

export default Header