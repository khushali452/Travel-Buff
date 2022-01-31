import React from 'react';
import "./header.css";

export default function Header() {
  return (
  <div className='header'>
<div className='headerTitles'>
    <span className='headerTitleSm'>Your  Travel  Journal</span>
    <span className='headerTitleLg'>Wanderlust</span>
</div>
<img className='headerImg' src="https://bedfordmedical.com.au/sites/bedford/media/banners/healthy-girl-travelling.jpg" alt="" />
  </div>
  )
}
