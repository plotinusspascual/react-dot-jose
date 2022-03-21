import React from "react";

function About() {

  const styles = {
    about: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      fontSize: '20px'

    }
  }
  return (
    <section id="about">
      <div className="container row-align-start h-100 align-items-center">
        <div className="col" style={styles.about}>
        <h1>About Me</h1>
        <p>
        I am a computer science and full stack web developer bootcamp graduate whose studies were focused on web design and development. 
        I’m seeking to apply my skills on real-world projects and deepen my understanding of software and web development.
        </p>        
        </div>

      </div>
    </section>
  );
}
export default About;