import React from 'react'
import logo from "../assets/NumberLay.svg"
import logoWBG from "../assets/logoWithoutBG.png"
import coin from "../assets/Coins.svg"
import insta from "../assets/insta.svg"
import facebook from "../assets/facebook.svg"
import linkedin from "../assets/linkedin.svg"
import mail from "../assets/mail.svg"

const Footer = () => {
  return (
    <>
        <div className='mt-[2rem]'>
            <div className='mdx:hidden flex px-[2rem] py-[2rem] mt-[1rem] mx-[1.5vw] slg:mx-[5vw]'>

                <div className='w-[30vw] flex flex-col px-2'>
                    <div className='pt-4'><a href="/"><img src={logoWBG} alt="" className='h-[2rem]'/></a></div>
                    <div className='mt-[1rem] text-[0.98rem] slg:text-[1.1rem]'>Your personalized financial ally</div>
                    <div className='flex mt-2'> 
                        <div className=''> <a href=""> <img src={insta} alt="" className='p-[5px] pl-0'/></a> </div>
                        <div> <a href=""> <img src={facebook} alt="" className='p-[5px]' /></a> </div>
                        <div> <a href=""> <img src={linkedin} alt="" className='p-[5px]' /></a> </div>
                    </div>
                </div>


                <div className='w-[30vw] flex flex-col px-2'>
                    <div className='text-[2rem] font-[500]'>Our Services</div>
                    <div className='text-[0.98rem] slg:text-[1.1rem]'>
                        <ul>
                            <li>Bookkeeping</li>
                            <li>Digital Record Management</li>
                            <li>Payroll Management</li>
                            <li>Account payable</li>
                            <li>Business Accounting Setup & Training</li>
                        </ul>
                    </div>
                </div>


                <div className='w-[30vw] flex flex-col px-2'>
                    <div className='p-8'><img src={coin} alt="" className='w-[100%] max-h-[150px]'/></div>
                </div>

            </div>



            <div className='md:hidden flex flex-col w-full '>
                <div className='flex px-[1.2rem] smd:px-[2.3rem]'>
                    <div className='flex flex-col'>
                        <div className='pt-4'><a href="/"><img src={logoWBG} alt="" className='h-[2rem]'/></a></div>
                        <div className='mt-[0.3rem] text-[0.98rem] text-[#565656]'>Your personalized financial ally</div>
                    </div>
                    <div className='flex items-center ml-auto'> 
                        <div className=''> <a href=""> <img src={insta} alt="" className='p-[5px] pl-0'/></a> </div>
                        <div> <a href=""> <img src={facebook} alt="" className='p-[5px]' /></a> </div>
                        <div> <a href=""> <img src={linkedin} alt="" className='p-[5px]' /></a> </div>
                    </div>
                </div>
                <div className='flex flex-col px-[1.2rem] smd:px-[2.3rem] mt-[0.8rem]'>
                    <div className='text-[2rem] font-[500]'>Our Services</div>
                    <div className='text-[1rem]  text-[#565656]'>
                        <ul>
                            <li className='mt-[0px]'>Bookkeeping</li>
                            <li className='mt-[2px]'>Digital Record Management</li>
                            <li className='mt-[2px]'>Payroll Management</li>
                            <li className='mt-[2px]'>Account payable</li>
                            <li className='mt-[2px]'>Business Accounting Setup & Training</li>
                        </ul>
                    </div>
                </div>
            </div>










            
            <div className='bg-blue-50 w-[90vw] h-[3rem] rounded-[2rem] mx-auto mt-[1rem] flex justify-evenly items-center'>
                {/* <div>+1 5666285</div> */}
                <div className='flex'> <img src={mail} alt="" className='mr-2 w-[20px]' /> 
                <a href="mailto:support@numberlaynow.com">support@numberlaynow.com</a></div>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-center text-[0.9rem] my-4 text-[#A2B3FF] '> 
                <div className=' text-center  font-[600] mx-1'>© 2024 Copyright: Numberlay Private Limited</div>
                <div className=' text-center  font-[600] mx-1 underline underline-offset-2'><a href="/Numberlay/privacy">Privacy policy and Terms of Use</a></div>
                {/* <div className=' text-center text-[#006EFF] font-[600] mx-1 underline underline-offset-2'>Terms & conditions</div> */}
            </div>
            {/* <div className='my-4 text-center text-[0.9rem] text-[#006EFF] font-[600]'>© 2024 Copyright: Numberlay Private Limited</div> */}

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