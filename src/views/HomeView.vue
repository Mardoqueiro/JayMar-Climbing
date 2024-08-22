<template>
  <header>
    <h1>Home</h1>

    <div class="sectionContainer sectionContainer__header" id="home">
      <div class="headerImage">
        <!-- <img
          src="https://mardoqueiro.github.io/all_images/JayMar/prod/sideImg/HomefirstPic.png"
          loading="lazy"
          alt=""
        /> -->
      </div>
      <div class="headerContent">
        <h1>JayMar Climbing</h1>
        <p>For Rock Climbing enthusiasts</p>
        <!-- <div class="headerLinks">
          <a href="#">
            <img src="" alt="app store" />
          </a>
          <a href="#">
            <img src="" alt="google play" />
          </a>
        </div> -->
      </div>
    </div>
  </header>
    
  <!-- Features Section -->
<section class="sectionContainer sectionContainer__features" id="features">
  <p class="sectionSubtitle">Why Choose Us</p>
  <h2 class="sectionTitle">Our Features</h2>
  <div class="stepsGrid">
    <div class="stepCard">
      <span><i class="ri-shield-check-line"></i></span>
      <h3>Safety First</h3>
      <p>Top-rated safety gear for all your climbing needs.</p>
    </div>
    <div class="stepCard">
      <span><i class="ri-hand-heart-line"></i></span>
      <h3>Community Support</h3>
      <p>Join a vibrant community of passionate climbers.</p>
    </div>
    <div class="stepCard">
      <span><i class="ri-earth-line"></i></span>
      <h3>Eco-Friendly</h3>
      <p>Sustainable products that respect the environment.</p>
    </div>
  </div>
</section>

<!-- Services Section -->
<section class="sectionContainer serviceContainer" id="services">
  <div class="serviceImage">
    <img src="your-service-image.jpg" alt="Our Services" />
  </div>
  <div class="serviceContent">
    <p class="sectionSubtitle">Services</p>
    <h2 class="sectionTitle">What We Offer</h2>
    <ul class="serviceList">
      <li>
        <span><i class="ri-truck-line"></i></span>
        <div>
          <h3>Fast Shipping</h3>
          <p>Get your gear quickly and reliably, no matter where you are.</p>
        </div>
      </li>
      <li>
        <span><i class="ri-recycle-line"></i></span>
        <div>
          <h3>Product Recycling</h3>
          <p>Recycle your old gear with us and get discounts on new items.</p>
        </div>
      </li>
      <li>
        <span><i class="ri-customer-service-line"></i></span>
        <div>
          <h3>Expert Support</h3>
          <p>Advice from experienced climbers to help you choose the right gear.</p>
        </div>
      </li>
    </ul>
  </div>
</section>

</template>

<script>
// @ is an alias to /src
// import NavBarComp from '@/components/NavBarComp.vue'
// import FooterComp from '@/components/FooterComp.vue'

export default {
  name: "HomeView",
  components: {
    // NavBarComp,
    // FooterComp
  },
};
</script>
<style>
/* img {
  height: 100vh;
  width: 100%;
  background-size: cover;
} */
</style>
