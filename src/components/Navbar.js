import React from "react";

function Navbar({ currentPage, handlePageChange}){

  const styles = {
    text: {
      textDecoration: 'none',
      color: '#706B62'
    },
    button: {
      textDecoration: 'none',
      color: 'white',
    },
    float: {
      float: 'right'
    }
  }

  return (
    <ul className="nav nav-tabs w-100">
      <li className="nav-item">
        <a style={styles.text}
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a style={styles.text}
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <button type="button" class="btn btn-secondary">
          <a href="../JosePascualResumeII.pdf" style={styles.button} download>My Resume</a>
      </button> 
    </ul>
  );
}

export default Navbar;