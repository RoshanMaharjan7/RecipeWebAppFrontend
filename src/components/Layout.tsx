import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }:{children: React.ReactNode}) => {
  return (
    <div className='bg-[#F8F8F8]'>
      <header className='px-[120px]'>
        <Navbar/>
      </header>
      <main className='px-[120px]'>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;