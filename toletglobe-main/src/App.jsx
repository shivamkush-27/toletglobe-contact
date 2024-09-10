
import Header from './components/Header';
import ReCAPTCHA from "react-google-recaptcha";

import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Service';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';
import Property_Listing from './pages/Property_Listing';
const App = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/service' element={<Service/>}/>
          
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          
          <Route path='/property-listing' element={<Property_Listing/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App