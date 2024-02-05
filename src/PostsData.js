import React from 'react'
// import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// const PostsData = ({id,name,email}) => {
  const PostsData = ({id,title,body}) => {
 
  


  return (
    
    <div className="d-flex flex-row card mt-3 text-bg-secondary">

    
                 <div class="col-10" >
                 <div className="card-body">
                  <h4>{id}</h4>
                 {/* <h5 className="card-title">{name}</h5>
                 <p className="card-text">{email}</p> */}
                 <h5 className="card-title">{title}</h5>
                 <p className="card-text">{body}</p>
                 </div>
                 </div>
                 
                 <div className="col-2 d-flex align-items-center justify-content-center">
                 {/* <button className="btn btn-success m-1">Edit</button>
                 
                 <button className="btn btn-danger m-1">Delete</button> */}
                 {/* <Link to={`/update/${id}`} className="btn btn-success m-1" >Update</Link>
                 <Link to="/delete" className="btn btn-danger m-1" >Delete</Link> */}
                 </div>

                

                 </div> 
                 
  )
}

export default PostsData