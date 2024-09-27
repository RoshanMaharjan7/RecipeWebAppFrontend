import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Headbar from './Headbar';

const Layout = ({ children }:{children: React.ReactNode}) => {
  return (
    <div className='bg-[#F8F8F8]'>
      <header className='px-8 max-w-[1340px] w-full mx-auto'>
        <Navbar/>
        <Headbar/>
      </header>
      <main className='px-8 py-6 pb-40 max-w-[1340px] w-full mx-auto'>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;