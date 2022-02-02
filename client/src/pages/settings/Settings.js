import React from 'react';
import "./settings.css";
import Sidebar from '../../components/sidebar/Sidebar';

export default function Settings() {
  return <div className="settings">
  <div className="settingsWrapper">
    <div className="settingsTitle">
      <span className="settingsTitleUpdate">Update Your Account</span>
      <span className="settingsTitleDelete">Delete Account</span>
    </div>
    <form className="settingsForm">
      <label>Profile Picture</label>
      <div className="settingsPP">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <label htmlFor="fileInput">
          <i className="settingsPPIcon far fa-user-circle"></i>{" "}
        </label>
        <input
          id="fileInput"
          type="file"
          style={{ display: "none" }}
          className="settingsPPInput"
        />
      </div>
      <label>Username</label>
      <input className='iput' type="text" placeholder="Khushali" name="name" />
      <label>Email</label>
      <input className='iput' type="email" placeholder="khushali@gmail.com" name="email" />
      <label>Password</label>
      <input className='iput' type="password" placeholder="Password" name="password" />
      <button className="iput settingsSubmitButton" type="submit">
        Update
      </button>
    </form>
  </div>
  <Sidebar />
</div>;
}
