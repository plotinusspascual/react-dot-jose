import React from "react";
import { IconName } from "react-icons/ai";

export default function Contact(){
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
      width: '500px'
    }
  };

  return (
    <section style={styles.form}>
    <div class="mb-3" style={styles.width}>
      <label for="exampleFormControlInput1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
    </div>
    <div class="mb-3" style={styles.width}>
      <label for="exampleFormControlTextarea1" class="form-label">Message</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <button type="button" class="btn btn-dark" style={styles.width}>Send</button>
    </section>
  )
}