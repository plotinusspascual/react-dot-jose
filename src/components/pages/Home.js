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
    about: {
      width: '80%',
      padding: '20px',
      color: 'white',
    },
    picture: {
      width: '300px'
    },
    paragraph: {
      fontSize: '25px'
    },
    background: {
      backgroundColor: '#706B62',
      paddingBottom: '30px'
    }
    
  }
  return(
  <section id="home" style={styles.background}>
    <header class="jumbotron" style={styles.jumbotron}>
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12 text-center">
            <h1 class="fw-light">console.log('Hi, Im Jose');</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container border border-light border-2 rounded" style={styles.about}>
      <div class="row align-items-start">
      <h1>Get To Know Me</h1>
        <div class="col" style={styles.paragraph}> 
          <p> 
            I am recent Computer Science graduate, who's studies are focused
            on web design and development. I'm seeking to apply my skills on
            real-world projects and deepen my understanding of software and
            web develeopment. Currently taking a full stack bootcamp from University
            of California Berkeley's extension program with an emphasis on front
            end. 
          </p>
        </div>
        <div class="col">
          <img src="https://i.imgur.com/j9AIHfL.jpg " class="rounded-circle mx-auto d-block" style={styles.picture}></img>
        </div>
      </div>   
    </div>  
  </section>

  )
}

export default Home;