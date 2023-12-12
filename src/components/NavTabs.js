import React from 'react';
import '../../src/styles/NavTabs.css'

const myStyles = {
  navImage: {
    // backgroundImage: "url('/images/background.png')",
    // backgroundColor: "",
    // backgroundSize: "cover",
    // height: "180px",
    backgroundColor: "",
    height: "140px",

  },
  link:{
    color: "",
    fontSize: "20px",
  }
}



// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <>
 <div className='nav-name'>Najiba Haidari</div>
 <div className='nav-list'>
  <a href="#about" className='nav-tab'>About</a>
 </div>
    </>
  );
}

export default NavTabs;
