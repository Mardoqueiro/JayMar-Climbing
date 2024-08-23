<template>
    
        <!-- <div class="row">
            <p class="lead">
                JayMar Climbing &copy; <span id="currYear"></span>
            </p>
        </div> -->

        <footer>
        <div class="sectionContainer footer__container">
          <div class="footer__col">
            <h4>Our Products</h4>
            <ul class="footer__links">
              <li><a href="#">Career</a></li>
              <li><a href="#">Rock Climbing</a></li>
              <li><a href="#">Packages</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Priceline</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>About JayMar Climbing</h4>
            <ul class="footer__links">
              <li><a href="#">Why JayMar Climbing</a></li>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Investors</a></li>
              <li><a href="#">Press Centers</a></li>
              <li><a href="#">Advertise</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>Resources</h4>
            <ul class="footer__links">
              <li><a href="#">Download</a></li>
              <li><a href="#">Help Centers</a></li>
              <li><a href="#">Guides</a></li>
              <li><a href="#">Partner Network</a></li>
              <li><a href="#">Developer</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>Extras</h4>
            <ul class="footer__links">
              <li><a href="#">Purchase Deal</a></li>
              <li><a href="#">Repair Shop</a></li>
              <li><a href="#">View Booking</a></li>
              <li><a href="#">Hire Companies</a></li>
              <li><a href="#">New Offers</a></li>
            </ul>
          </div>
        </div>
        <div class="section__container footer__bar">
          <h4>JayMar Climbing</h4>
            <p class="lead">JayMar Climbing &copy; <span id="currYear"></span></p>
          <ul class="footer__socials">
            <li>
              <a href="#"><i class="bi bi-instagram"></i></a>
            </li>
            <li>
              <a href="#"><i class="bi bi-facebook"></i></a>
            </li>
            <li>
              <a href="#"><i class="bi bi-twitter-x"></i></a>
            </li>
          </ul>
        </div>
      </footer>
</template>

<script>
export default {
    name: "FooterComp",
}
</script>

<style scoped>
.footer__container {
    display: grid;
    gap: 4rem 2rem;
    border-bottom: 1px solid var(--text-light);
  }

  .footer__col h4 {
    margin-bottom: 2rem;
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text-dark);
  }

  .footer__links {
    display: grid;
    gap: 1rem;
  }
  
  .footer__links a {
    font-weight: 600;
    color: var(--text-light);
  }
  
  .footer__links a:hover {
    color: var(--primary-color);
  }
  
  .footer__bar {
    padding-block: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 1rem;
    flex-wrap: wrap;
  }
  
  .footer__bar h4 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-dark);
  }
  
  .footer__bar p {
    font-weight: 500;
    color: var(--text-light);
    text-align: center;
  }
  
  .footer__socials {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .footer__socials a {
    display: inline-block;
    padding: 8px 10px;
    font-size: 1rem;
    color: var(--text-dark);
    border-radius: 100%;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
  }
  
  .footer__socials a:hover {
    color: var(--white);
    background: var(--gradient);
  }

  .footer {
  background: linear-gradient(135deg, #3E4E50, #2C3E50);
  color: #FFFFFF;
  padding: 40px 20px;
  text-align: center;
}


  /*---------------------------------------
  #FOOTER RESPONSIVE
  ----------------------------------------*/
  @media (width > 540px) {
    .footer__container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (width > 768px) {
    .footer__container {
      grid-template-columns: repeat(4, 1fr);
    }
  
    .footer__bar {
      flex-direction: row;
    }
  
    .footer__bar :is(h4, .footer__socials) {
      flex: 1;
    }
  
    .footer__socials {
      justify-content: flex-end;
    }
  }
</style>