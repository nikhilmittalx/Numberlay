import logo from './logo.svg';
import './App.css';
import Temp from './components/Temp';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    // <div className="App">
      
    // </div>
    <>
      <Navbar />
      <Header/>
      <Temp />
      <div className='mt-[5rem] no-scrollbar'>
        <iframe className="border-0 w-[100%] no-scrollbar" height="630px" src="https://noteforms.com/forms/contact-numberlay-yq6oyz"></iframe>
      </div>
      <Footer />
    </>
  );
}

export default App;
