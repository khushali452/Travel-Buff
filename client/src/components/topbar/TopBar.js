import React from 'react';
import { Link } from 'react-router-dom';
import "./topbar.css";

export default function TopBar() {
  const user=false;
  return( <div className='top'>
      <div className='topLeft'>
      <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className='topCenter'>
      <div className='topList'>
        <li className='topListItem'>
          <Link className='link' to="/">HOME</Link>
        </li>
        <li className='topListItem'><Link className='link' to="/">ABOUT</Link></li>
        <li className='topListItem'><Link className='link' to="/">CONTACT</Link></li>
        <li className='topListItem'><Link className='link' to="/write">WRITE</Link></li>
        {user && <li className="topListItem">LOGOUT</li>}
      </div>

      </div>
      <div className='topRight'>
        {
          user?(
            <img className='topImg' src='https://miro.medium.com/max/3150/1*ph1pktjOwfYviVki_X66Og.jpeg'></img>
          ) : (
            <ul className='topList'>
              <li className='topListItem'>
              <Link className='link' to="/login">LOGIN</Link>
              </li>
            <li className='topListItem'>
            <Link className='link' to="/register">REGISTER</Link>
            </li>
            
            </ul>
          )

        }
        
      <i className="topSearchIcon fas fa-search"></i>
      </div>
  </div>
  )
}
