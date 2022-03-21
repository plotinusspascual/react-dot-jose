import React from "react";

export default function Projects(){

  const styles = {
    title: {
      textAlign: 'center',
      padding: '10px',
      margin: '20px',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      
    },
    projects: {
      width: '18rem',
      height: '500px',
      padding: '10px',
      margin: 'auto',
      color: 'black',
      fontSize: '20px'
    },
    image: {
      width: '100%',
      height: '250px'
    }  
  }
  return (
    <section id="projects">
      <div class="container-fluid" style={styles.title}>
        <div class="row align-items-start">
        <h1>My Projects</h1>
        <div class="card" style={styles.projects}>
          <img src="https://i.imgur.com/HDvbG1d.png" class="card-img-top" style={styles.image}></img>
          <div class="card-body">
            <h2>FeedMe</h2>
            <p class="card-text">A restaurant randomizer that gets users location and allows for filtered searches</p>
            <a href="https://github.com/PentaZoned/feed-me" class="btn btn-dark" target="_blank">Check it out!</a>
          </div>
        </div>          

        <div class="card" style={styles.projects}>
          <img src="https://i.imgur.com/44qmSC1.jpg" class="card-img-top" style={styles.image}></img>
          <div class="card-body">
            <h2>DontFundMe</h2>
            <p class="card-text">Crowdfunding application where users can tell their stories to get funding or support someone else's story</p>
            <a href="https://github.com/PentaZoned/DontFundMe" class="btn btn-dark" target="_blank">Check it out!</a>
          </div>
        </div>          

        <div class="card" style={styles.projects}>
          <img src="https://i.imgur.com/67c6FBc.jpg" class="card-img-top" style={styles.image}></img>
          <div class="card-body">
            <h2>Social Network API</h2>
            <p class="card-text">A Backend API for social networking using MongoDB</p>
            <a href="https://github.com/plotinusspascual/social-network-api" class="btn btn-dark" target="_blank">Check it out!</a>
          </div>
        </div>         

        <div class="card" style={styles.projects}>
          <img src="https://i.imgur.com/Vqjyasf.png" class="card-img-top" style={styles.image}></img>
          <div class="card-body">
            <h2>ReadMe Generator</h2>
            <p class="card-text">An easy to use application that takes users input and generates a ReadMe</p>
            <a href="https://github.com/plotinusspascual/readme-generator" class="btn btn-dark" target="_blank">Check it out!</a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}