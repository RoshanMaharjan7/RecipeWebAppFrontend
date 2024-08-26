import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Headbar from './Headbar';

const Layout = ({ children }:{children: React.ReactNode}) => {
  return (
    <div className='bg-[#F8F8F8]'>
      <header className='px-[24px] sm:px-[40px] md:px-[120px]'>
        <Navbar/>
        <Headbar/>
      </header>
      <main className='px-[24px] sm:px-[40px] md:px-[120px]'>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;