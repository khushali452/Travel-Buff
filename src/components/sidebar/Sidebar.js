import React from 'react';
import "./sidebar.css";

export default function Sidebar() {
  return <div className='sidebar'>
    <div className='sidebarItem'>
      <span className='sidebarTitle'>ABOUT ME</span>
      <img  src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="" />
      <p>hey there ....khushali here</p>
    </div>
    <div className='sidebarItem'>
      <span className='sidebarTitle'>CATEGORIES</span>
      <ul className='sidebarList'>
        <li className='sidebarListItem'>MOUNTAINS</li>
        <li className='sidebarListItem'>BEACHES</li>
        <li className='sidebarListItem'>TREKS</li>
        <li className='sidebarListItem'>PICNICS</li>
        <li className='sidebarListItem'>ROAD TRIPS</li>
      </ul>
    </div>
    <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>

  </div>;
}


