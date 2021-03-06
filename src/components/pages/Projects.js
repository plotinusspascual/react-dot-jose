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
      height: '550px',
      padding: '10px',
      margin: 'auto',
      color: 'black',
      fontSize: '20px'
    },
    image: {
      width: '100%',
      height: '250px'
    },
    button: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0'
    }  
  }
  return (
    <section id="projects">
      <div className="container-fluid" style={styles.title}>
        <div className="row align-items-start">
        <h1>My Projects</h1>
        <div className="card" style={styles.projects}>
          <img src="https://i.imgur.com/HDvbG1d.png" className="card-img-top" style={styles.image} alt=""></img>
          <div className="card-body">
            <h2>FeedMe</h2>
            <p className="card-text">A restaurant randomizer that gets users location and allows for filtered searches</p>
            <a href="https://plotinusspascual.github.io/feed-me/" className="btn btn-dark" target="_blank" style={styles.button} rel="noreferrer">Check it out!</a>
          </div>
        </div>          

        <div className="card" style={styles.projects}>
          <img src="https://i.imgur.com/44qmSC1.jpg" className="card-img-top" style={styles.image} alt=""></img>
          <div className="card-body">
            <h2>DontFundMe</h2>
            <p className="card-text">Crowdfunding application where users can tell their stories to get funding or support someone else's story</p>
            <a href="https://github.com/PentaZoned/DontFundMe" className="btn btn-dark" target="_blank" style={styles.button} rel="noreferrer">Check it out!</a>
          </div>
        </div>          

        <div className="card" style={styles.projects}>
          <img src="https://i.imgur.com/67c6FBc.jpg" className="card-img-top" style={styles.image} alt=""></img>
          <div className="card-body">
            <h2>Social Network API</h2>
            <p className="card-text">A Backend API for social networking using MongoDB</p>
            <a href="https://github.com/plotinusspascual/social-network-api" className="btn btn-dark" target="_blank" style={styles.button} rel="noreferrer">Check it out!</a>
          </div>
        </div>         

        <div className="card" style={styles.projects}>
          <img src="https://i.imgur.com/xgoiL0z.png" className="card-img-top" style={styles.image} alt=""></img>
          <div class="card-body">
            <h2>GITMATCH</h2>
            <p className="card-text">Matching APP for developers to GitMatch'ed with other developers to collaborate</p>
            <a href="https://morning-sea-85016.herokuapp.com/" className="btn btn-dark" target="_blank" style={styles.button} rel="noreferrer">Check it out!</a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}