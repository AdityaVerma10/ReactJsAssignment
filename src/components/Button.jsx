import React from 'react'

function Button({
  
    content,
    className=''
}) {

  return (
    
    <button className={`${className} h-[48px] rounded-[12px] bg-[#1B88F4] text-[16px] text-[#FFFFFF] font-[400]`} >
                    {content}
    </button>
  )
}

export default Button
