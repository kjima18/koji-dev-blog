import React from 'react';
import { Link } from 'gatsby';
import '../styles/sidebar.css'
import Account from '../../static/account.jpg';
import {
  FacebookIcon,
  TwitterIcon
} from 'react-share';

const SNSLink = () => {
  const TwitterUrl = 'https://twitter.com/prokoji18'
  const FacebookUrl = 'https://www.facebook.com/profile.php?id=100006424912340'
  return(
    <div>
      <Link to={TwitterUrl} target="_blank" className='mr'>
        <TwitterIcon size={25} round />
      </Link>

      <Link to={FacebookUrl} target="_blank">
        <FacebookIcon size={25} round />
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
        <h5 className='description'>仙台でリモート&スクラムを実践するエンジニアの技術ブログ</h5>
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