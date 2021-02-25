import React from 'react';
import '../styles/layout.css';
import TopHeader from './topHeader';
import Footer from'./footer'
import Sidebar from './sidebar';

const Layout = ({ children }) => {
  return(
    <div>
      <TopHeader/>
      <div className='layout'>
        <main className='main'>{children}</main>
        <Sidebar/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout;