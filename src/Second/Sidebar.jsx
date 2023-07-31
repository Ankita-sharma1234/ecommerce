import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <>
    <aside>
      <p> Menu </p>
      <a href="javascript:void(0)">
        
      <Link to="/profile">
        <h2 className="fa fa-laptop" aria-hidden="true" />
        Profile
        </Link>
      
      </a> 
      <a href="javascript:void(0)">
        <Link to="/post">
        <h2 className="fa fa-laptop" aria-hidden="true" />
        Post
        </Link>
        
     
      </a>
      <a href="javascript:void(0)">
      <Link to="/gallery">
        <h2 className="fa fa-laptop" aria-hidden="true" />
        Gallery
        </Link>
      </a>
      <a href="javascript:void(0)">
      <Link to="/todo">
        <h2 className="fa fa-laptop" aria-hidden="true" />
        ToDo
        </Link>
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