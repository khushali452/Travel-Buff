import React from 'react';
import "./topbar.css";

export default function TopBar() {
  return( <div className='top'>
      <div className='topLeft'>
      <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className='topCenter'>
      <div className='topList'>
        <li className='topListItem'>HOME</li>
        <li className='topListItem'>ABOUT</li>
        <li className='topListItem'>CONTACT</li>
        <li className='topListItem'>WRITE</li>
        <li className='topListItem'>LOGOUT</li>
      </div>

      </div>
      <div className='topRight'>
        <img className='topImg' src='https://miro.medium.com/max/3150/1*ph1pktjOwfYviVki_X66Og.jpeg'></img>
      <i className="topSearchIcon fas fa-search"></i>
      </div>
  </div>
  )
}
