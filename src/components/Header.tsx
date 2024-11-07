import "../style/header.css";

import React from 'react'

const Header = () => {
  return (
    <header>
        <p className="header-p1">R&J News</p>
        <p className="header-p2">HOME</p>
        <p className="header-p2">PROJECTS</p>
        <p className="header-p2">CONTENT</p>
        <p className="header-p2">CONTACTS</p>
        <p className="header-p2">PIECES</p>

        <button className="header-btn">SEE NOW</button>
      </header>
  )
}

export default Header
