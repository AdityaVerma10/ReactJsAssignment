import React from 'react'

function Button({
    width,
    content
}) {
  console.log(width)
  return (
    
    <button className={`w-[${width}px] h-[48px]  rounded-[12px] bg-[#1B88F4] text-[16px] text-[#FFFFFF] font-[400]`} >
                    {content}
    </button>
  )
}

export default Button