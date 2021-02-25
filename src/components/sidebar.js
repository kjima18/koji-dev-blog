import React from 'react';
import '../styles/sidebar.css'
import Account from '../../static/account.jpg';

const Sidebar = () => {
  return(
    <div className='sidebar'>
      <div className='sidebar__item author'>
        <div className='trim'>
          <img src={Account} alt='account'></img>
        </div>
        <h2 className='title'>Koji Dev Blog</h2>
        <h5 className='description'>仙台でリモート&スクラムを実践するエンジニアの技術ブログ</h5>
      </div>
    </div>
  )
}

export default Sidebar;