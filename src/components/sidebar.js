import React from 'react';
import { Link } from 'gatsby';
import '../styles/sidebar.css'
import Account from '../../static/account.jpg';
import {
  TwitterIcon
} from 'react-share';

const SNSLink = () => {
  const TwitterUrl = 'https://twitter.com/prokoji18'
  return(
    <div>
      <Link to={TwitterUrl} target="_blank" className='mr'>
        <TwitterIcon size={25} round />
      </Link>
    </div>
  )
}

const Sidebar = ({ tags }) => {
  return(
    <div className='sidebar'>
      <div className='author'>
        <div className='trim'>
          <img src={Account} alt='account'></img>
        </div>
        <h2 className='title'>Koji Dev Blog</h2>
        <h5 className='description'>仙台Uターンエンジニアの技術ブログ</h5>
        <div className='sns-link'>
          <SNSLink/>
        </div>
      </div>
      <div className='sidebar__item'>
        <h3 className='sidebar-title'>タグ</h3>
          <ul className='tags'>
            {tags && tags.map((tag) =>
              <Link key={tag.node.slug} to={`/${tag.node.slug}/`} className='tag-link'>
                <li>#{tag.node.title}</li>
              </Link>
            )}
          </ul>
      </div>
    </div>
  )
}

export default Sidebar;