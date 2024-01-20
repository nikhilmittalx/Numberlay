import React, { useEffect, useState } from 'react'
import logo from '../assets/NumberLay.svg'
import logoWBG from '../assets/logoWBG.png'

const Navbar = () => {


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




  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScrollPos > currentScrollPos) {
        setIsNavbarVisible(true);
      } else {
        setIsNavbarVisible(false);
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
        <div className={`fixed top-0 w-full bg-white navbar transition-all duration-400 ${isNavbarVisible ? '' : 'hidden'}`} id='navbar'>

        <nav className='py-[0.5rem] px-[1rem] smd:px-[1.5rem] md:px-[2.5rem] flex justify-between top-0 z-[1000]'>
        {/* <nav className='py-[1.75rem] px-[1rem] smd:px-[1.5rem] md:px-[2.5rem] flex justify-between top-0 z-[1000]'> */}
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
        </div>
    </>
  )
}

export default Navbar