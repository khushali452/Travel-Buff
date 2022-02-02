import React from 'react';
import "./singlePost.css";

export default function SinglePost() {
  return <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img className='singlePostImg' src="https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2019/04/THAILAND.jpg?ssl=1" alt=""></img>
        <h1 className='singlePostTitle'>
          this is my single post
          <div className='singlePostEdit'>
          <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>Author : <b>Khushali</b></span>
          <span className='singlePostDate'> 1 hour ago</span>
        </div>
        <p className='singlePostDesc'>hello hsagfggggggggggggggggggggggahfadskag
          FGjdfgjDFJFDJSDJFGDSKGFSDGIFGgkgsdkfjskdjfgskdgfsudgfwkgfgdfksgdfkgs</p>
      </div>
  </div>;
}
