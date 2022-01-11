import React from 'react'

const Header = () => {
    return (
      <header>
        <nav className="menu">
          <div className="header_logo">
            <a href="#">Md Hafijul Islam</a>
          </div>
          <div className="header_links">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">My Story</a>
            <a href="#">My Skills</a>
            <a href="#">Portfolio</a>
            <a href="#">Review</a>
          </div>
          <button className="button" type="button">
            Contact Me
          </button>
        </nav>
      </header>
    );
}

export default Header
