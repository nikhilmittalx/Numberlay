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
          <div className='smmx:hidden flex flex-col justify-center text-center smdx:text-[2rem] text-[2.5rem] slg:text-[3rem] font-[600]'>
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


          <div className='mt-[5rem] flex flex-col mdx:items-center md:flex-row justify-evenly'>
            {/* <div className='w-[65%] flex flex-col justify-center items-center'> */}
            <div className='w-[100%] md:w-[65%] flex flex-col mdx:items-center justify-center'>
              <div>
                <div className='text-[2.1rem] slg:text-[3rem]'>Bookkeeping</div>
                <ul className='text-[1.1rem] slg:text-[1.5rem]'>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Transaction Recording</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Expense Tracking</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Bank and Credit Card Reconciliation</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Financial Reporting</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Audit Support</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Up-to-Date Accounting Ledgers</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Historical Bookkeeping</li>
                </ul>
              </div>
            </div>
            <div className='w-[50%] md:w-[35%] min-w-[250px] max-w-[340px]'><img src={two} alt="" className='p-4'/></div>
          </div>



          <div className='mt-[5rem] flex flex-col mdx:items-center md:flex-row justify-evenly'>
            <div className='w-[50%] md:w-[30%] min-w-[250px] max-w-[320px]'><img src={three} alt="" className='p-4' /></div>
            
            <div className='w-[100%] md:w-[65%] flex flex-col items-center justify-center'>
              <div>
                <div className='text-[2.1rem] slg:text-[3rem]'>Accounts Payable </div>
                <ul className='text-[1.1rem] slg:text-[1.5rem]'>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Bill and Invoice Tracking</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Invoice Record Keeping</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Approval Workflows</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Timely Payment Delivery</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Weekly & Monthly A/P Reporting</li>
                </ul>
              </div>
            </div>

          </div>





          <div className='mt-[5rem] flex flex-col mdx:items-center md:flex-row justify-evenly'>
            {/* <div className='w-[65%] flex flex-col justify-center items-center'> */}
            <div className='w-[100%] md:w-[65%] flex flex-col mdx:items-center justify-center'>
              <div>
                <div className='text-[2.1rem] slg:text-[3rem]'>Payroll Management</div>
                <ul className='text-[1.1rem] slg:text-[1.5rem]'>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Employee On-Boarding & Off-Boarding</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Time Entry Approvals</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Schedule Direct Deposits</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Payroll Tax Remittance</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Quarterly Tax Filings</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Year-end W-2's</li>
                </ul>
              </div>
            </div>
            <div className='w-[50%] md:w-[30%] min-w-[250px] max-w-[320px]'><img src={seven} alt="" className='p-4'/></div>
          </div>


          <div className='mt-[5rem] flex flex-col mdx:items-center md:flex-row justify-evenly'>
            {/* <div className='w-[65%] flex flex-col justify-center items-center'> */}
            <div className='w-[50%] md:w-[30%] min-w-[250px] max-w-[320px]'><img src={five} alt="" className='p-4'/></div>
            <div className='w-[100%] md:w-[65%] flex flex-col mdx:items-center justify-center'>
              <div>
                <div className='text-[2.1rem] slg:text-[3rem]'>Digital Record Management</div>
                <ul className='text-[1.1rem] slg:text-[1.5rem]'>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Categorization of Incoming Information</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Indexing and Segmentation of Records</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Instant document retrieval</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Simplified Information Access</li>
                </ul>
              </div>
            </div>
          </div>



          <div className='mt-[5rem]  flex flex-col mdx:items-center md:flex-row justify-evenly'>
            {/* <div className='w-[65%] flex flex-col justify-center items-center'> */}
            <div className='w-[100%] md:w-[65%] flex flex-col mdx:items-center justify-center'>
              <div>
                <div className='text-[2.1rem] slg:text-[3rem]'>Business Accounting Setup & Training</div>
                <ul className='text-[1.1rem] slg:text-[1.5rem]'>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>QuickBooks System Integration</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Organize vendors, customers, and accounts</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Customized Settings and Preferences as per Business </li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Needs</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Training and Knowledge Transfer</li>
                </ul>
              </div>
            </div>
            <div className='w-[50%] md:w-[30%] min-w-[250px] max-w-[320px]'><img src={six} alt="" className='p-4'/></div>
          </div>








          {/* <div className='mt-[3rem] flex flex-row'>
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

          </div> */}





          {/* <div className='h-[9rem]'></div> */}
        </div>

















        {/* 2nd , mobile view*/}
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

          <div className='mt-[5rem] flex flex-col mdx:items-center md:flex-row'>
            {/* <div className='w-[65%] flex flex-col justify-center items-center'> */}
            <div className='w-[100%] md:w-[65%] flex flex-col mdx:items-center justify-center'>
              <div>
                <div className='text-[2rem]'>Bookkeeping</div>
                <ul className='text-[1.1rem]'>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Transaction Recording</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Expense Tracking</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Bank and Credit Card Reconciliation</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Financial Reporting</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Audit Support</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Up-to-Date Accounting Ledgers</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Historical Bookkeeping</li>
                </ul>
              </div>
            </div>
            <div className='w-[50%] md:w-[30%] min-w-[250px] max-w-[320px]'><img src={two} alt="" className='p-4'/></div>
          </div>

          {/* <div className='mt-[3rem] flex flex-col mdx:items-center md:flex-row'>
            <div className='w-[100%] md:w-[65%] flex flex-col mdx:items-center justify-center'>
              <div>
                <div className='text-[2rem]'>Bookkeeping</div>
                <ul className='text-[1.1rem]'>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Bank and Credit Card Reconciliations</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Categorization of Information.</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Efficient Data Capture.</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Up-to-date Accounting Ledgers.</li>
                </ul>
              </div>
            </div>
            <div className='w-[50%] md:w-[30%] min-w-[250px] max-w-[320px]'><img src={two} alt="" className='p-4'/></div>
          </div> */}


          <div className='mt-[5rem] flex flex-col mdx:items-center md:flex-row'>
            
            <div className='w-[100%] md:w-[65%] flex flex-col items-center justify-center'>
              <div>
                <div className='text-[2rem]'>Accounts Payable </div>
                <ul className='text-[1.1rem]'>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Bill and Invoice Tracking</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Invoice Record Keeping</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Approval Workflows</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Timely Payment Delivery</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Weekly & Monthly A/P Reporting</li>
                </ul>
              </div>
            </div>
            <div className='w-[50%] md:w-[30%] min-w-[250px] max-w-[320px]'><img src={three} alt="" className='p-4' /></div>

          </div>
          {/* <div className='mt-[5rem] flex flex-col mdx:items-center md:flex-row'>
            
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
          </div> */}


   

          <div className='mt-[5rem] flex flex-col mdx:items-center md:flex-row'>
            
            <div className='w-[100%] md:w-[65%] flex flex-col items-center justify-center'>
              <div>
                <div className='text-[2rem]'>Payroll Management </div>
                <ul className='text-[1.1rem]'>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Employee On-Boarding & Off-Boarding</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Time Entry Approvals</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Schedule Direct Deposits</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Payroll Tax Remittance</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Quarterly Tax Filings</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Year-end W-2's</li>
                </ul>
              </div>
            </div>
            <div className='w-[50%] md:w-[30%] min-w-[250px] max-w-[320px]'><img src={three} alt="" className='p-4' /></div>

          </div>
          







          <div className='mt-[5rem] flex flex-col mdx:items-center md:flex-row'>
            
            <div className='w-[100%] md:w-[65%] flex flex-col items-center justify-center'>
              <div>
                <div className='text-[2rem]'>Digital Record Management </div>
                <ul className='text-[1.1rem]'>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Categorization of Incoming Information</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Indexing and Segmentation of Records</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Instant document retrieval</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Simplified Information Access</li>
                </ul>
              </div>
            </div>
            <div className='w-[50%] md:w-[30%] min-w-[250px] max-w-[320px]'><img src={three} alt="" className='p-4' /></div>

          </div>








          <div className='mt-[5rem] flex flex-col mdx:items-center md:flex-row'>
            
            <div className='w-[100%] md:w-[65%] flex flex-col items-center justify-center'>
              <div>
                <div className='text-[2rem]'>Business Accounting Setup & Training </div>
                <ul className='text-[1.1rem]'>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>QuickBooks System Integration</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Organize vendors, customers, and accounts</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Customized Settings and Preferences as per Business </li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Needs</li>
                  <li className='flex'><div className='my-auto mr-2'><img src={dot} alt="" /></div>Training and Knowledge Transfer</li>
                </ul>
              </div>
            </div>
            <div className='w-[50%] md:w-[30%] min-w-[250px] max-w-[320px]'><img src={three} alt="" className='p-4' /></div>

          </div>



        </div>
      </div>
    </>
  )
}

export default Temp