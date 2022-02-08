import React from 'react';
import "./post.css";
import { Link } from "react-router-dom";

export default function Post({post}) {

  return <div className='post'>
      {post.photo && (
      <img className='postImg' 
      src="https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2018/09/swiss-alps.jpg" 
      alt="" 
      />
      )}
      <div className='postInfo'>
          <div className='postCats'>
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
          </div>
          <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
          
          <hr />
           <span className='postDate'>{new Date(post.createdAt).toDateString()}</span>

           <p className='postDesc'>{post.desc}</p>
      </div>

  </div>;
}
