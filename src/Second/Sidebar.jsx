import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <>
    <aside>
      <p> Menu </p>
     <a href="javascript:void(0)">
        
        <h2 className="fa fa-user-o" aria-hidden="true" />
       Profile 
      </a>
      <a href="javascript:void(0)">
        <h2 className="fa fa-laptop" aria-hidden="true" />
        Post
      </a>
      <a href="javascript:void(0)">
        <h2 className="fa fa-clone" aria-hidden="true" />
      Gallery
      </a>
      <a href="javascript:void(0)">
        <h2 className="fa fa-star-o" aria-hidden="true" />
        ToDo
      </a>
    </aside>
    <div className="social">
      <a
        href="https://www.linkedin.com/in/florin-cornea-b5118057/"
        target="_blank"
      >
        <i className="fa fa-linkedin" />
      </a>
    </div>
  </>
  
  )
}

export default Sidebar