import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import "./topbar.css";
import { Context } from '../../context/Context';

export default function TopBar() {
  const {user,dispatch}=useContext(Context);
  const PF="http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

return( <div className='top'>
      <div className='topLeft'>
      
      </div>
      <div className='topCenter'>
      <div className='topList'>
        <li className='topListItem'>
          <Link 
          className='link'
           to="/">HOME</Link>
        </li>
        <li className='topListItem'>
          <Link 
          className='link' 
          to="/#about">ABOUT</Link></li>
        <li className='topListItem'>
          <Link className='link' 
          to="/">CONTACT</Link></li>
        <li className='topListItem'>
          <Link className='link' 
          to="/write">WRITE</Link></li>
        <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
      </div>

      </div>
      <div className='topRight'>
        
        {
          user?(
            <Link to="/settings">
              <img className='topImg' src={PF+user.profilePicture}></img>

            </Link>
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
