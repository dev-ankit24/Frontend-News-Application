import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default  function Navbar(props){
  let [search, setSearch]=useState ("")
  function postSearch(e){
    e.preventDefault()                                        // donot page refresh
    props.changeSearch(search)                // pass state data from parent component(APP)
    setSearch("")                                // search se data remove 
  }
    return (
     <>
     
      <nav className="navbar navbar-expand-lg background sticky-top">
  <div className="container-fluid">
    <Link  className="navbar-brand" to="/">NewsApp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" onClick={()=>props.changeSearch("")} to="/All">All</Link>  
          {/* onclick  function  remove search value  */}
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Politics" onClick={()=>props.changeSearch("")}>Politics</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Crime" onClick={()=>props.changeSearch("")}>Crime</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Education"onClick={()=>props.changeSearch("")}>Education</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Entertainment"onClick={()=>props.changeSearch("")}>Entertainment</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Other
          </a>
          <ul className="dropdown-menu">
            <li><Link  className="dropdown-item" onClick={()=>props.changeSearch("")} to="/Science">Science</Link></li>
            <li><Link  className="dropdown-item" onClick={()=>props.changeSearch("")} to="/Technology">Technology</Link></li>
            <li><Link  className="dropdown-item" onClick={()=>props.changeSearch("")} to="/Sports">Sports</Link></li>
            <li><Link  className="dropdown-item" onClick={()=>props.changeSearch("")} to="/IPL">IPL </Link></li>
            <li><Link  className="dropdown-item" onClick={()=>props.changeSearch("")} to="/Jokes">Jokes</Link></li>
            <li><Link  className="dropdown-item" onClick={()=>props.changeSearch("")} to="/Covid-19">Covid-19</Link></li>
            <li><Link  className="dropdown-item" onClick={()=>props.changeSearch("")} to="/India">India</Link></li>
            <li><Link  className="dropdown-item" onClick={()=>props.changeSearch("")} to="/World">World</Link></li>
          </ul>
        </li>
      {/* ------------------ language section-------------------------- */}
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Language
          </a>
          <ul className="dropdown-menu">
            <li><button  className="dropdown-item"onClick={()=>props.changeLanguage("hi")} >Hindi</button></li>
            <li><button className="dropdown-item" onClick={()=>props.changeLanguage("en")}>English</button></li>
          </ul>
        </li>
      </ul>
        
      <form className="d-flex" role="search" onSubmit={postSearch}>
        < input className="form-control me-2" type="search" name='search' placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value) } aria-label="Search" />
        <button className="btn btn-outline-dark" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

     </>
    )
  }

