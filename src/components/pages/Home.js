import React from "react";
import About from "./About";
import Projects from "./Projects";
import Footer from "../Footer"
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
      display: 'flex',
      alignItems: 'center'
    },
    picture: {
      width: '300px'
    },
    content: {
      display: 'flex',
      justifyContent: 'center',
    }
  }
  
  return(
  <section id="home">
    <header className="jumbotron" style={styles.jumbotron}>
      <div className="container" style={styles.content}>
        <div className="row align-items-start">
          <div className="col-12">
            <img src="https://i.imgur.com/j9AIHfL.jpg " className="rounded-circle mx-auto d-block" style={styles.picture} alt=""></img>
          </div>
          <div className="col-12 text-center">
            <h1 className="fw-light">console.log('Hi, Im Jose');</h1>
          </div>
        </div>
      </div>
    </header>
    <div>
      <About></About>
    </div>
    <div>
      <Projects></Projects>
    </div>
    <footer>
      <Footer></Footer>
    </footer>
  </section>
  )
}

export default Home;