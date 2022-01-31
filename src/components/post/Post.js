import React from 'react';
import "./post.css";
export default function Post() {
  return <div className='post'>
      <img className='postImg' src="https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2018/09/swiss-alps.jpg" alt="" 
      />
      <div className='postInfo'>
          <div className='postCats'>
              <span className='postCat'>Music</span>
              <span className='postCat'>life</span>
          </div>
          <span className='postTitle'>lorem ipsum</span>
          <hr />
           <span className='postDate'>1 hour ago</span>

           <p className='postDesc'>i love travelling</p>
      </div>

  </div>;
}
