import React from 'react'
import one from "../assets/1.svg"
import lines from "../assets/lines.svg"

const Header = () => {
  return (
    <>
        <div className='flex justify-center smmx:mx-[1vw] mx-[3vw] mt-[11rem]'>
        {/* <div className='flex justify-center smmx:mx-[1vw] mx-[3vw] mt-[7rem]'> */}
            <div className='flex flex-col smmx:px-[0.8rem] px-[1rem] font-[400]'>
                {/* <div className='text-[3rem]'>Your Personalized Accounting Partner for Business Growth</div> */}
                <div className='smdx:text-[2rem] smdx:leading-[2.25rem] 900x:text-[2.75rem] 900x:leading-[3rem] text-[3.2rem] leading-[3.75rem]'>Your Personalized</div>
                <div className='smdx:text-[1.5rem] smdx:leading-[2rem] 900x:text-[2.75rem] 900x:leading-[3rem] text-[3.2rem] leading-[3.75rem]'><span className='text-blue-600'>Accounting Partner</span> for </div>
                <div className='smdx:text-[2rem] smdx:leading-[2.25rem] 900x:text-[2.75rem] 900x:leading-[3rem] text-[3.2rem] leading-[3.75rem]'>Business Growth</div>
                <div className='w-[100%] 900x:max-w-[500px] max-w-[530px]'><img src={lines} alt="" className='w-[70%]'/></div>
                
                <div className='mt-[1.5rem] text-[1.25rem] md:w-[60vw]'>Numberlay, your partner in efficient bookkeeping and accounting solutions. We specialize in supporting small and individual businesses with our detail-oriented approach and personalised solutions tailored to meet the unique needs of your enterprise.</div>
                <div className='mdx:mx-auto mt-[1.5rem] text-[0.85rem]'><button className='text-white bg-blue-600 px-6 py-3 rounded-[4rem]'><a href="">Our Services</a> </button></div>
            </div>
            <div className='mdx:hidden'><img src={one} alt="" className='mdx:hidden w-full max-w-[600px] min-w-[250px]'/></div>
        </div>
    </>
  )
}

export default Header