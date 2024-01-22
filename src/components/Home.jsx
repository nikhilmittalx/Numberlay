
// import '../App.css';
import Temp from './Temp';
import Header from './Header';
// import Navbar from './components/Navbar';
// import Nav from './components/Nav';
// import Footer from './components/Footer';
import { useState } from 'react';


function Home({a}) {
  
  return (
    // <div className="App">
      
    // </div>
    <>

        {/* <Navbar handleNav={handleNav} a={openn}/> */}
      {/* <div className={`${a ? 'blur-sm' : ''}`}> */}
        {/* <Nav /> */}
        <Header />
        <Temp />
        <div className='mt-[5rem] no-scrollbar'>
          <iframe className={`border-0 w-[100%] no-scrollbar `} height="630px" src="https://noteforms.com/forms/contact-numberlay-yq6oyz"></iframe>
        </div>
      {/* </div> */}
        {/* <Footer /> */}
    </>
  );
}

export default Home;
