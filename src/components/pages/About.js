import React from "react";

function About() {

  const styles = {
    about: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',

    },
    jumbotron: {
      height: '100vh',
      minHeight: '100vh',
      backgroundImage: 'url("https://i.imgur.com/zYp1nEz.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'white',
      opacity: '0.5 !important',
    }
  }
  return (
    <section id="about" style={styles.jumbotron}>
      <div class="container row-align-start h-100 align-items-center">
        <div class="col" style={styles.about}>
        <h1>About Me</h1>
        <p>
          I am recent Computer Science graduate, who's studies are focused
          on web design and development. I'm seeking to apply my skills on
          real-world projects and deepen my understanding of software and
          web develeopment. Currently taking a full stack bootcamp from University
          of California Berkeley's extension program with an emphasis on front
          end. 
        </p>        
        </div>

      </div>
    </section>
  );
}
export default About;