import React from 'react'
import logo from "../assets/NumberLay.svg"
import logoWBG from "../assets/logoWBG.png"
import coin from "../assets/Coins.svg"

const Footer = () => {
  return (
    <>
        <div>
            <div className='flex px-[2rem] py-[2rem] mt-[1rem] mx-[5vw]'>

                {/* <div className='w-[30vw] flex flex-col px-2'>
                    <div className='pt-4'><img src={logoWBG} alt="" className='h-[2rem]'/></div>
                    <div className='mt-[1rem]'>We meticulously categorize financial transactions, capturing every detail, including descriptions and attachments.</div>
                    <div className='flex mt-2'> 
                        <div> @1</div>
                        <div> @2</div>
                        <div> @3</div>
                    </div>
                </div>


                <div className='w-[30vw] flex flex-col px-2'>
                    <div className='text-[2rem] font-[500]'>Our Services</div>
                    <div>
                        <ul>
                            <li>Bookkeeping</li>
                            <li>Accounts Payable Services</li>
                            <li>Reporting</li>
                            <li>Digital Record Management</li>
                            <li>Business Accounting Setup & Training</li>
                        </ul>
                    </div>
                </div>


                <div className='w-[30vw] flex flex-col px-2'>
                    <div className='p-8'><img src={coin} alt="" className='w-[100%] max-h-[150px]'/></div>
                </div> */}

            </div>


            
            <div className='bg-blue-50 w-[90vw] h-[3rem] rounded-[2rem] mx-auto mt-[1rem] flex justify-evenly items-center'>
                {/* <div>+1 5666285</div> */}
                <div>info@numberlay.com</div>
            </div>

            <div className='my-4 text-center text-[0.9rem] text-[#006EFF] font-[600]'>© 2024 Copyright: Numberlay Private Limited</div>

        </div>
        





        {/* <div className='p-4 mx-[5vw] mt-[4rem]' >
            <div className='grid grid-cols-3 gap-4'>
                <div className='w-[30vw] flex flex-col p-2'>
                    <div className='pt-2'><img src={logo} alt="" className='h-[2rem]'/></div>
                    <div className='mt-[1rem]'>We meticulously categorize financial transactions, capturing every detail, including descriptions and attachments.</div>
                    <div className='flex mt-2'> 
                        <div> @1</div>
                        <div> @2</div>
                        <div> @3</div>
                    </div>
                </div>


                <div className='w-[30vw] flex flex-col p-2'>
                <div className='text-[2rem] font-[500]'>Our Services</div>
                <div>
                    <ul>
                        <li>Bookkeeping</li>
                        <li>Accounts Payable Services</li>
                        <li>Reporting</li>
                        <li>Digital Record Management</li>
                        <li>Account Setup and Business Calendar Management</li>
                        <li>Taxes</li>
                    </ul>
                </div>
                </div>



                <div className='w-[30vw] flex flex-col p-2'>
                    <div className='text-[2rem] font-[500]'>Subscribe to newsletter</div>
                    <input type="text" />
                </div>


            </div>
        </div> */}
    </>
  )
}

export default Footer