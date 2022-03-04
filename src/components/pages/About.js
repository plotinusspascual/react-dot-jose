import React from "react";

function About() {

  const styles = {
    about: {
      width: '80%',
      padding: '20px'
    }
  }
  return (
    <section id="about">
      <div class="container border border-dark border-1 rounded" style={styles.about}>
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
    </section>
  );
}
export default About;