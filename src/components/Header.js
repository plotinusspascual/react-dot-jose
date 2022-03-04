import React from "react";


function Header(){

  const styles = {
    jumbotron: {
      height: '100vh',
      minHeight: '500px',
      backgroundImage: 'url("https://i.imgur.com/zYp1nEz.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'white'
    }
  }
  return(
  <header class="jumbotron" style={styles.jumbotron}>
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-12 text-center">
          <h1 class="fw-light">Console.log('Hi, Im Jose');</h1>
        </div>
      </div>
    </div>
  </header>  
  )
}

export default Header;