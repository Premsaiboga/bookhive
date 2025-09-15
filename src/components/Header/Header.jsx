import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar />
        <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
          <p className='header-text fs-18 fw-3'>
            A book is a window to new worlds, offering knowledge, imagination, and inspiration. It allows readers to explore ideas, cultures, and experiences beyond their own. Every page turned brings a journey of learning and discovery.</p>
          <SearchForm />
        </div>
      </header>
    </div>
  )
}

export default Header