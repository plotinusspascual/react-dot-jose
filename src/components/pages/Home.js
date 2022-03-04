import React from "react";


function Home(){

  const styles = {
    jumbotron: {
      height: '100vh',
      minHeight: '500px',
      backgroundImage: 'url("https://i.imgur.com/zYp1nEz.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'white',
    },
    picture: {
      width: '300px'
    },
    content: {
      paddingTop: '250px'
    }
  }
  
  return(
  <section id="home">
    <header class="jumbotron" style={styles.jumbotron}>
      <div class="container" style={styles.content}>
        <div class="row align-items-start">
          <div class="col-12 text-center">
            <h1 class="fw-light">console.log('Hi, Im Jose');</h1>
          </div>
          <div class="col-12">
            <img src="https://i.imgur.com/j9AIHfL.jpg " class="rounded-circle mx-auto d-block" style={styles.picture}></img>
          </div>
        </div>
      </div>
    </header>
  </section>
  )
}

export default Home;