import React from "react";

function Footer(){

  const styles = {
    footer: {
      margin: 'auto'
    }
  }

  return(
    <div className="footer bg-dark text-center text-white" style={styles.footer}>
      <div class="container p-4 pb-0">
    <section class="mb-4">
      <a class="btn btn-outline-light btn-floating m-1" href="#" role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>

      <a class="btn btn-outline-light btn-floating m-1" href="#" role="button"
        ><i class="fab fa-twitter"></i
      ></a>

      <a class="btn btn-outline-light btn-floating m-1" href="#" role="button"
        ><i class="fab fa-google"></i
      ></a>

      <a class="btn btn-outline-light btn-floating m-1" href="#" role="button"
        ><i class="fab fa-instagram"></i
      ></a>

      <a class="btn btn-outline-light btn-floating m-1" href="#" role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>

      <a class="btn btn-outline-light btn-floating m-1" href="#" role="button"
        ><i class="fab fa-github"></i
      ></a>
    </section>
  </div>


  <div class="text-center p-3">
    Made with ReactJS
  </div>
    </div>
  )
}

export default Footer;