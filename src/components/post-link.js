import React from "react"
import "../styles/post-link.css"
import Image from '../../static/posts/image1.jpg'

const PostLink = () => {
  return(
    <div className="post-link">
      <div>
          <img src={Image} className="post-link-image" alt="post-cover"></img>
      </div>
      <div className="post-link-text">
          <h2>Gatsbyでブログを作成してみた</h2>
          <p className="post-link-body">先日、爆速なサイトを作れると噂のReact製フレームワークのGatsbyを学んでみました。</p>
          <p className="post-link-date">2020年5月30日</p>
      </div>
  </div>
  )
}

export default PostLink;
