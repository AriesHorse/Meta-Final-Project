import React from 'react';
import Navbar from './Navbar';
import { Routes ,Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
   <>
    <Header/>
    <Navbar />
    <Main />
    <Footer />
   </>
  );
}

export default App;
