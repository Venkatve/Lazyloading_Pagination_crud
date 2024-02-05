
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import axios from "axios";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Features from "./pages/Features";
import PostsData from './PostsData';
// import{BrowserRouter,Routes,Route}from "react-router-dom";

function App() {
  const [posts, setPosts]= useState(null)

 useEffect(()=>{
  //axios method:

  axios.get("https://jsonplaceholder.typicode.com/posts")
  .then(res=>setPosts(res.data))

  //fetch method:

  // fetch("https://jsonplaceholder.typicode.com/posts")
  // .then(res=>res.json())
  // .then(res=>{
  //   setPosts(res)
  // })
 },[])
  return (
    <div className="App">
      <nav className="navbar bg-primary navbar-expand-lg ">
  <div className="container">
    <a className="navbar-brand text-light" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="/">
            Home
            </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/feature">
            Features
            </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/contact">
           Contact
            </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href='/about' >
           About
            </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      {/* <BrowserRouter>
<Routes>
  <Route path='/' element={<App/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path='/feature' element={<Features/>}/>
</Routes>
</BrowserRouter> */}
      <div className='container'>
        {posts ?
        (
            posts.map((data)=>(
            <PostsData key={data.id} title={data.title} body={data.body} />
            ))
          
            
        )
      :(<h4>loading</h4>)}
      </div>
      

    </div>
  );
}

export default App;
