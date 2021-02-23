import React from 'react';
import '../styles/layout.css'
import TopHeader from './topHeader'
import Footer from "./footer"

const Layout = ({ children }) => {
  return(
    <div>
      <TopHeader/>
      <div className='layout'>
        <main>{children}</main>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout;