import React, { useEffect, useState } from 'react'
import logo from '../assets/NumberLay.svg'
import logoWBG from '../assets/logoWithoutBG.png'
import three from '../assets/threeLines.svg'
import cross from '../assets/cross.png'

const Navbar = (props) => {


  // const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.scrollY;
  //     // const currentScrollPos = window.pageYOffset;

  //     if (prevScrollPos > currentScrollPos) {
  //       document.querySelector('.navbar').classList.remove('hidden');
  //       // document.querySelector('.navbar').classList.add('show');
  //     } else {
  //       document.querySelector('.navbar').classList.add('hidden');
  //     }

  //     setPrevScrollPos(currentScrollPos);
  //   };

  //   // Attach the scroll event listener when the component mounts
  //   window.addEventListener('scroll', handleScroll);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [prevScrollPos]);


  
  const [open, setOpen] = useState(false);




  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      console.log(currentScrollPos, "-----------")
      if (currentScrollPos<50 || prevScrollPos > currentScrollPos) {
        setIsNavbarVisible(false);
        // setIsNavbarVisible(true);
      } else {
        setIsNavbarVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);






  return (
    <>
        {/* <nav className='py-[1.75rem] px-[2.5rem] flex justify-between sticky top-0 left-0 z-[1000]'> */}
        {/* <div className='fixed top-0 w-full bg-white navbar transition-all duration-300' id='navbar'> */}
        {/* <div className={`fixed top-0 w-full bg-white navbar ease-in-out transition-all duration-400 ${isNavbarVisible ? 'opacity-0' : 'opacity-100'}`} id='navbar'> */}

        {/* <div className={`fixed top-0 w-full bg-white navbar ease-in-out transition-all duration-900 ${isNavbarVisible ? 'top-[-100px]' : 'top-0'}`} id='navbar'>

          <nav className='py-[0.5rem] px-[1rem] smd:px-[1.5rem] md:px-[2.5rem] flex justify-between top-0 z-[1000]'>
              <div className='smdx:w-[120px] w-[12vw] my-auto min-w-[150px]'><img src={logoWBG} alt="NumberLay" className='w-full'/></div>
              <div className='mdx:hidden'>
                  <button className='mx-5'><a href="">Accounting Services</a> </button>
                  
                  <button className='text-white mx-5 bg-blue-600 px-4 py-2 md:py-3 rounded-[4rem]'><a href="">Book Consultaion</a> </button>
              </div>
              <div className='md:hidden flex flex-col '>
                  <button className='mx-1 smdx:text-[0.95rem]'><a href="">Accounting Services</a> </button>
                  
                  <button className='text-white mx-1 mt-1 smdx:text-[0.95rem] bg-blue-600 px-4 py-1 rounded-[4rem]'><a href="">Book Consultaion</a> </button>
              </div>
          </nav>
        </div> */}


        
        <div className={`fixed top-0 w-full bg-white navbar ease-in-out transition-all duration-900 ${!open && isNavbarVisible ? 'top-[-100px]' : 'top-0'} `} id='navbar'>

          <nav className='mdx:py-[0.5rem] py-[0.1rem] px-[1rem] smd:px-[1.5rem] md:px-[2.5rem] flex justify-between top-0 z-[1000] bg-white'>



                {/* <div className="flex items-center font-medium justify-between "> */}
                    <div className={`z-[5000] px-1 md:w-auto w-full flex justify-between`}>
                      
                      <div className={`smdx:w-[120px] w-[12vw] my-auto min-w-[150px] bg-`}> <a href="/"><img src={logoWBG} alt="NumberLay" className='w-full'/></a></div>
                      <div
                        className=" md:hidden z-30"
                        onClick={() => {setOpen(!open); props.handleNav();} }

                        
                      >
                        {open
                          ? //   <RxCross2 className="z-50" />
                            // "cross "
                            <img src={cross} alt="" className='w-[35px] py-1'/>
                            : //   <IoMdMenu className="z-50" />
                            // "three lines"
                            <img src={three} alt="" className='w-[35px] py-1'/>
                            }
                      </div>
                    </div>



                    <ul className="md:flex md:flex-row md:flex-wrap md:mt-[0.5rem] md:mb-[0.6rem] hidden items-center gap-3 mx-4">
                      <button className='mx-5'><a href="">Services</a> </button>
                  
                      <button className='text-white mx-5 bg-blue-600 px-4 py-2 md:py-3 rounded-[4rem]'><a href="">Contact Us</a> </button>
                      
                    </ul>




                    {/* Mobile nav */}
                    <ul className={`${props.a ? '' : '' } z-40 md:hidden flex flex-col items-center fixed min-w-[250px] w-[40vw] top-0 overflow-y-auto bottom-0 py-[5rem] pl-4 duration-500 ${open ? "right-0" : "right-[-100%] "} smdx:
                     bg-blue-50 rounded-md bg-clip-padding backdrop-filter backdrop-blur-[5px] bg-opacity-50 border border-gray-100

                    `} id='navv'>
                    {/* <ul className={`z-20 md:hidden flex flex-col items-center bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 duration-500 ${open ? "left-0" : "left-[-100%] "}`}> */}

                      <button className='mx-5 max-w-[300px]'><a href="">Services</a> </button>
                  
                      <button className='text-white max-w-[300px] mt-2 mx-5 bg-blue-600 px-4 py-2 md:py-3 rounded-[4rem]'><a href="">Contact Us</a> </button>
                      
                    </ul>

                  
                {/* </div> */}




                
          </nav>
        </div>



    </>
  )
}

export default Navbar