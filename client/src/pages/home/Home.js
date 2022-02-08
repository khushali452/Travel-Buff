import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import "./home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from '../../components/posts/Posts';
import axios from "axios";

export default function Home() {
  const [posts,setPosts]=useState([])
useEffect(()=>{
  const fetchPosts = async ()=>{
    const res= await axios.get("posts")
    console.log(res);
  }
  fetchPosts()
})

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
