import React from "react";
import { BsGithub, BsInstagram, BsTwitter, BsLinkedin  } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact(){

  const [state, handleSubmit] = useForm("xpzblnkd");
  if (state.succeeded) {
      return <p>I will get back to you ASAP!</p>;
  }

  const styles = {
    form: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px'
    },
    width: {
      display: 'flex',
      width: '500px',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '30px'
    }
  };

  return (
    <section style={styles.form}>
      <form onSubmit={handleSubmit} style={styles.width}>
        <label htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          className="form-control"
          required
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
          className="form-control"
          required
        />
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message here"
          className="form-control"
          required
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="form-control"
          required
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>

    <div class="container" style={styles.icon}>
    <a class="btn btn-outline-dark btn-floating m-1" 
        href="https://www.instagram.com/plotinussp/" 
        role="button" target="_blank">
        <i class="fab fa-instagram-f"><BsInstagram /></i>
      </a>

      <a class="btn btn-outline-dark btn-floating m-1" 
        href="mailto:plotinusspascual@gmail.com" 
        role="button" target="_blank">
        <i class="fab fa-twitter"><SiGmail /></i>
      </a>
      
      <a class="btn btn-outline-dark btn-floating m-1" 
        href="https://www.linkedin.com/in/jose-plotinuss-pascual/" 
        role="button" target="_blank">
        <i class="fab fa-linkedin-in"><BsLinkedin /></i>
      </a>

      <a class="btn btn-outline-dark btn-floating m-1" 
        href="https://github.com/plotinusspascual/" 
        role="button" target="_blank">
        <i class="fab fa-github"><BsGithub /></i>
      </a>
    </div>

    </section>
  )
}