import React from "react";


function Background(){

  const styles = {
    jumbotron: {
      height: '100vh',
      minHeight: '500px',
      backgroundImage: 'url("https://i.imgur.com/zYp1nEz.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'white',
    }
  }
  
  return(
  <section id="home">
    <header className="jumbotron" style={styles.jumbotron}>
    </header>
  </section>
  )
}

export default Background;