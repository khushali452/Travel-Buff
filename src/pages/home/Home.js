import React from 'react';
import Header from '../../header/Header';
import "./home.css";
import Sidebar from "../../sidebar/Sidebar";
import Posts from '../../posts/Posts';

export default function Home() {
  return(
    <>
    <Header />
  <div className='home'>
   <Posts />
   <Sidebar />
   
  </div>
  </>
  )
}
