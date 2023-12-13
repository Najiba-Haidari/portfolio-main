import React from 'react';



// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <>
 <div className='nav-name'>Najiba Haidari</div>
 <div className='nav-list'>
  <a href="#about" className='nav-tab'>About</a>
  <a href="#portfolio" className='nav-tab'>Portfolio</a>
  <a href="#contact" className='nav-tab'>Contact</a>
  <a href="#resume" className='nav-tab'>Resume</a>
 </div>
    </>
  );
}

export default NavTabs;
