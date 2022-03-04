import React from "react";

export default function Projects(){

  const styles = {
    title: {
      textAlign: 'center',
      padding: '10px',
      margin: '20px',

    },
    projects: {
      width: '18rem',
      padding: '10px',
      margin: 'auto'
    },
    jumbotron: {
      height: '100vh',
      minHeight: '500px',
      backgroundImage: 'url("https://i.imgur.com/zYp1nEz.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'black',
    }
  }
  return (
    <section id="projects" style={styles.jumbotron}>
      <div class="container-fluid" style={styles.title}>
        <div class="row align-items-start">
        <h1>My Projects</h1>
        <div class="card" style={styles.projects}>
          <img src="https://i.imgur.com/HDvbG1d.png" class="card-img-top"></img>
          <div class="card-body">
            <h2>FeedMe</h2>
            <p class="card-text">A restaurant randomizer that gets users location and allows for filtered searches</p>
            <a href="#" class="btn btn-primary">Check it out!</a>
          </div>
        </div>          

        <div class="card" style={styles.projects}>
          <img src="https://i.imgur.com/HDvbG1d.png" class="card-img-top"></img>
          <div class="card-body">
            <h2>FeedMe</h2>
            <p class="card-text">A restaurant randomizer that gets users location and allows for filtered searches</p>
            <a href="#" class="btn btn-primary">Check it out!</a>
          </div>
        </div>          

        <div class="card" style={styles.projects}>
          <img src="https://i.imgur.com/HDvbG1d.png" class="card-img-top"></img>
          <div class="card-body">
            <h2>FeedMe</h2>
            <p class="card-text">A restaurant randomizer that gets users location and allows for filtered searches</p>
            <a href="#" class="btn btn-primary">Check it out!</a>
          </div>
        </div>         

        <div class="card" style={styles.projects}>
          <img src="https://i.imgur.com/HDvbG1d.png" class="card-img-top"></img>
          <div class="card-body">
            <h2>FeedMe</h2>
            <p class="card-text">A restaurant randomizer that gets users location and allows for filtered searches</p>
            <a href="#" class="btn btn-primary">Check it out!</a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}