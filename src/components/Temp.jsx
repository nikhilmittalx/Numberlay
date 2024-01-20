import React from 'react'
import lines from "../assets/lines.svg"
import two from "../assets/2.svg"
import three from "../assets/3.svg"
import four from "../assets/4.svg"
import five from "../assets/5.svg"
import six from "../assets/6.svg"
import seven from "../assets/7.svg"
import dot from "../assets/dot.svg"

const Temp = () => {
  return (
    <>
      <div className='flex justify-center mt-[10rem] '>
        <div className='mdx:hidden w-[90vw] p-[1rem] smd:p-[2rem] bg-blue-50 rounded-[2rem] flex flex-col justify-center'>
          <div className='smmx:hidden flex flex-col justify-center text-center smdx:text-[2rem] text-[2.5rem]'>
            <div className=' '>How We can help you</div>
            <div className=' '>Run Your Business </div>
            <div className='w-[100%] flex justify-center'><img src={lines} alt="" className=' smdx:w-[85%] max-w-[300px]'/></div>
          </div>
          <div className='smm:hidden flex flex-col justify-center text-center smdx:text-[2rem] text-[2.5rem]'>
            <div className=' '>How We can </div>
            <div className=' '>help you</div>
            <div className=' '>Run Your Business </div>
            <div className='w-[100%] flex justify-center'><img src={lines} alt="" className=' smdx:w-[90%] max-w-[300px]'/></div>
          </div>


          <div className='mt-[3rem] flex flex-col mdx:items-center md:flex-row'>
            {/* <div className='w-[65%] flex flex-col justify-center items-center'> */}
            <div className='w-[100%] md:w-[65%] flex flex-col mdx:items-center justify-center'>
              <div>
                <div className='text-[2rem]'>Bookkeeping</div>
                <ul className='text-[1.2rem]'>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Bank and Credit Card Reconciliations</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Categorization of Information.</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Efficient Data Capture.</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Up-to-date Accounting Ledgers.</li>
                </ul>
              </div>
            </div>
            <div className='w-[50%] md:w-[30%] min-w-[250px] max-w-[320px]'><img src={two} alt="" className='p-4'/></div>
          </div>



          <div className='mt-[3rem] flex flex-col mdx:items-center md:flex-row'>
            <div className='w-[50%] md:w-[30%] min-w-[250px] max-w-[320px]'><img src={three} alt="" className='p-4' /></div>
            
            <div className='w-[100%] md:w-[65%] flex flex-col items-center justify-center'>
              <div>
                <div className='text-[2rem]'>Accounts Payable Services</div>
                <ul className='text-[1.2rem]'>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Bill Approval Workflows.</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Timely Vendor Payments.</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Vendor Profile Management.</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Flexible Payment Schedules.</li>
                </ul>
              </div>
            </div>

          </div>





          <div className='mt-[3rem] flex flex-col mdx:items-center md:flex-row'>
            {/* <div className='w-[65%] flex flex-col justify-center items-center'> */}
            <div className='w-[100%] md:w-[65%] flex flex-col mdx:items-center justify-center'>
              <div>
                <div className='text-[2rem]'>Reporting</div>
                <ul className='text-[1.2rem]'>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Analytical Business Dashboards:</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Categorization of Information.</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Efficient Data Capture.</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Up-to-date Accounting Ledgers.</li>
                </ul>
              </div>
            </div>
            <div className='w-[50%] md:w-[30%] min-w-[250px] max-w-[320px]'><img src={four} alt="" className='p-4'/></div>
          </div>


          <div className='mt-[3rem] flex flex-row'>
            <div className='w-[30%]'><img src={five} alt="" className='p-4' /></div>
            
            <div className='w-[65%] flex flex-col justify-center items-center'>
              <div>
                <div className='text-[2rem]'>Digital Record Management</div>
                <ul className='text-[1.2rem]'>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Analytical Business Dashboards:</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Categorization of Information.</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Efficient Data Capture.</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Up-to-date Accounting Ledgers.</li>
                </ul>
              </div>
            </div>

          </div>






          <div className='mt-[3rem] flex flex-row'>
            {/* <div className='w-[65%] flex flex-col justify-center items-center'> */}
            <div className='w-[65%] flex flex-col justify-center'>
              <div>
                <div className='text-[2rem]'>Account Setup and Business Calendar Management:</div>
                <ul className='text-[1.2rem]'>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Analytical Business Dashboards:</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Categorization of Information.</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Efficient Data Capture.</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Up-to-date Accounting Ledgers.</li>
                </ul>
              </div>
            </div>
            <div className='w-[30%]'><img src={six} alt="" className='p-4'/></div>
          </div>


          <div className='mt-[3rem] flex flex-row'>
            <div className='w-[30%]'><img src={seven} alt="" className='p-4' /></div>
            
            <div className='w-[65%] flex flex-col justify-center items-center'>
              <div>
                <div className='text-[2rem]'>Taxes</div>
                <ul className='text-[1.2rem]'>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Analytical Business Dashboards:</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Categorization of Information.</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Efficient Data Capture.</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Up-to-date Accounting Ledgers.</li>
                </ul>
              </div>
            </div>

          </div>





          {/* <div className='h-[9rem]'></div> */}
        </div>



        {/* 2nd */}
        <div className='md:hidden w-[90vw] p-[1rem] smd:p-[2rem] bg-blue-50 rounded-[2rem] flex flex-col justify-center'>
          <div className='smmx:hidden flex flex-col justify-center text-center smdx:text-[2rem] text-[2.5rem]'>
            <div className='font-[600]'>How We can help you</div>
            <div className=' font-[600]'>Run Your Business </div>
            <div className='w-[100%] flex justify-center'><img src={lines} alt="" className=' smdx:w-[85%] max-w-[300px]'/></div>
          </div>
          <div className='smm:hidden flex flex-col justify-center text-center smdx:text-[2rem] text-[2.5rem]'>
            <div className=' '>How We can </div>
            <div className=' '>help you</div>
            <div className=' '>Run Your Business </div>
            <div className='w-[100%] flex justify-center'><img src={lines} alt="" className=' smdx:w-[90%] max-w-[300px]'/></div>
          </div>


          <div className='mt-[3rem] flex flex-col mdx:items-center md:flex-row'>
            <div className='w-[100%] md:w-[65%] flex flex-col mdx:items-center justify-center'>
              <div>
                <div className='text-[2rem]'>Bookkeeping</div>
                <ul className='text-[1.2rem]'>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Bank and Credit Card Reconciliations</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Categorization of Information.</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Efficient Data Capture.</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Up-to-date Accounting Ledgers.</li>
                </ul>
              </div>
            </div>
            <div className='w-[50%] md:w-[30%] min-w-[250px] max-w-[320px]'><img src={two} alt="" className='p-4'/></div>
          </div>



          <div className='mt-[5rem] flex flex-col mdx:items-center md:flex-row'>
            
            <div className='w-[100%] md:w-[65%] flex flex-col items-center justify-center'>
              <div>
                <div className='text-[2rem]'>Accounts Payable Services</div>
                <ul className='text-[1.2rem]'>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Bill Approval Workflows.</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Timely Vendor Payments.</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Vendor Profile Management.</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Flexible Payment Schedules.</li>
                </ul>
              </div>
            </div>

            <div className='w-[50%] md:w-[30%] min-w-[250px] max-w-[320px]'><img src={three} alt="" className='p-4' /></div>
          </div>





          <div className='mt-[5rem] flex flex-col mdx:items-center md:flex-row'>
            <div className='w-[100%] md:w-[65%] flex flex-col mdx:items-center justify-center'>
              <div>
                <div className='text-[2rem]'>Reporting</div>
                <ul className='text-[1.2rem]'>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Analytical Business Dashboards:</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Categorization of Information.</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Efficient Data Capture.</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Up-to-date Accounting Ledgers.</li>
                </ul>
              </div>
            </div>
            <div className='w-[50%] md:w-[30%] min-w-[250px] max-w-[320px]'><img src={four} alt="" className='p-4'/></div>
          </div>












        </div>
      </div>
    </>
  )
}

export default Temp