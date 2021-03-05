import React from 'react';
import '../styles/layout.css';
import TopHeader from './topHeader';
import Footer from'./footer'
import Sidebar from './sidebar';

const Layout = ({ children, tags }) => {
  return(
    <div>
      <TopHeader/>
      <div className='layout'>
        <main className='main'>{children}</main>
        <Sidebar tags={tags}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout;
