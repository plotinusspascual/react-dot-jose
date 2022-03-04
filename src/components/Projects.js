import React from "react";

export default function Projects(){

  const styles = {
    title: {
      textAlign: 'center',
      padding: '10px',
      margin: '20px',
      border: '1px solid',

    },

    projects: {
      width: '18rem',
      padding: '10px',
      margin: 'auto'
    }
  }
  return (
    <section id="projects" style={styles.title}>
      <h1>My Projects</h1>
      <div className="container">
        <div class="row align-items-start">
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