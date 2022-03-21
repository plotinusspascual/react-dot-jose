import React from "react";
import FileSaver from 'file-saver';
import resume from '../JosePascualResume.pdf';
import Link from "react-dom";

function Navbar({ currentPage, handlePageChange}){

  const saveFile = () => {
    FileSaver.saveAs(
      process.env.REACT_APP_CLIENT_URL + "../../public/asset/JosePascualResume.pdf",
      "JosePascualResume"
    );
  };

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
      <button className="btn btn-secondary" style={styles.button}>
         <a href={resume} download="JosePascualResume.pdf">Resume</a>
      </button> 
    </ul>
  );
}

export default Navbar;