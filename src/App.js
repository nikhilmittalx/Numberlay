import logo from './logo.svg';
import './App.css';
// import Temp from './components/Temp';
// import Header from './components/Header';
import Navbar from './components/Navbar';
// import Nav from './components/Nav';
import Home from './components/Home';
import Terms from './components/Terms';
import Footer from './components/Footer';
import { useState } from 'react';
import {BrowserRouter as Router,Route,Routes, HashRouter} from "react-router-dom"



function App() {
  const [openn, setOpenn] = useState(false);
  const handleNav = ()=>{
    setOpenn(!openn);
    console.log(openn, "-=-=-");
  }
  return (
    // <div className="App">
      
    // </div>
    <HashRouter>
      <Navbar handleNav={handleNav}/>
      <Routes>
      <Route exact path="/" element={<Home a={openn}/>}> </Route>
      <Route exact path="/Numberlay" element={<Home a={openn}/>}> </Route>
      <Route exact path="/privacy" element={<Terms/>}> </Route>
      <Route exact path="/Numberlay/privacy" element={<Terms/>}> </Route>
      </Routes>
      <Footer/>
    </HashRouter>
    // <>

    //     <Navbar handleNav={handleNav} a={openn}/>
    //     <Header />
    //     <Temp />
    //     <div className='mt-[5rem] no-scrollbar'>
    //       <iframe className={`border-0 w-[100%] no-scrollbar `} height="630px" src="https://noteforms.com/forms/contact-numberlay-yq6oyz"></iframe>
    //     </div>
    //     <Footer />



    // </>
  );
}

export default App;
