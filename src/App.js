
import React, { useEffect, useState,Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import axios from 'axios';
import PostsData from './PostsData';

import Features from './pages/Features';
import About from './pages/Crud';
import Pagination from "./pages/Pagination";
import LazyLoading from './pages/LazyLoading';
import Crud from './pages/Crud';

function App() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    
      // axios.get('http://localhost:3003/users')
      axios.get('https://jsonplaceholder.typicode.com/posts')
      
      
    
    .then((res) => setPosts(res.data))
   
    .catch(err=>{
      console.log(err.message)
      alert("No Data Found");
    })
  }, []);

  const[currentPage,setCurrentPage] = useState(1)
  const recordsPerPage=10;
  const lastIndex=currentPage*recordsPerPage;
  const firstIndex=lastIndex-recordsPerPage;

  const records=posts ? posts.slice(firstIndex, lastIndex) :[];
  const npage=posts ? Math.ceil(posts.length / recordsPerPage) : 0;
  const numbers=[...Array(npage +1).keys()].slice(1)

  function prePage(){
    if(currentPage !== firstIndex){
      setCurrentPage(currentPage - 1)
    }

  }
  function nextPage(){
    if(currentPage !== lastIndex){
      setCurrentPage(currentPage + 1)
    }
  }
  function changeCPage(id){
    setCurrentPage(id)
  }
  return (
    <Router>
      <div className="App">
        <nav className="navbar bg-primary navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand text-light" to="/">
              Navbar
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <Link className="nav-link active text-light" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/features">
                    Features
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/contact">
                    LazyLoading
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/crud">
                   CRUD
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container">
        {/* <div className='text-end mt-2 me-5'><Link to="/create" className='btn btn-primary'>+ Add</Link></div> */}
         <Routes>
          <Route path="/" element={posts ? (
              records.map((data) => (
                
                // <PostsData  key={data.id} id={data.id} name={data.name} email={data.email} />
                <PostsData  key={data.id} id={data.id} title={data.title} body={data.body} />
           
              ))
            ) : (
              <h5>No Records Founnd...</h5>
            )} />
            
           
            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<LazyLoading />} />
            <Route path="/crud" element={<Crud />} />
            
          </Routes>
         
 
<Pagination
          currentPage={currentPage}
          changeCPage={changeCPage}
          prePage={prePage}
          nextPage={nextPage}
          numbers={numbers}
        />
        
        </div>
        
        
        
         
                
      </div>
      
    </Router>
  );
}

export default App;
