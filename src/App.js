import React from 'react';
import Navbar from './Navbar';
import Reservations from "./components/pages/Reservations"
import { Routes ,Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Header';
import HomePage from "./components/pages/Home"
import About from "./components/pages/About"
import Menu from "./components/pages/Menu"
import Login from "./components/pages/Login"
import Order from "./components/pages/Order"
import Main from './Main';
import Footer from './Footer';
import "./index.css"

function App() {
  return (
    <BrowserRouter>
   <>
   <Navbar />
   <div className="container">
   <Routes>
    <Route exact path="/" element={<HomePage />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/menu" element={<Menu />}/>
    <Route path="/reservations" element={<Reservations />}/>
    <Route path="/order" element={<Order />}/>
    <Route path="/login" element={<Login />}/>
    
    </Routes>
    {/* <Main /> */}
    {/* <Footer /> */}
    </div>
   </>
   </BrowserRouter>
  );
  
}

export default App;
