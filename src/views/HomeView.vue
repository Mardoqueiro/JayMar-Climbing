<template>
  <div class="sectionContainer sectionContainer__header" id="home">
    <div class="headerContentContainer">
      <div class="headerImage">
        <img
          src="https://mardoqueiro.github.io/all_images/JayMar/prod/sideImg/HomefirstPic.png"
          loading="lazy"
          alt="JayMar Climbing"
        />
      </div>
      <div class="headerContent">
        <h1>JayMar Climbing</h1>
        <p>For Rock Climbing Enthusiasts</p>
        <p>Explore our range of high-quality climbing gear and accessories.</p>
        <button class="btn btn-primary"><a href="/products">Shop Now</a></button>
      </div>
    </div>
  </div>

  <!-- Products Section -->
  <!-- <section>
    <div>
      <h1>Products Page</h1>
      <div class="row gap-2 justify-content-center">
        <card-comp v-for="product in products" :key="product">
          <template #cardHeader>
            <img
              :src="product.prodUrl"
              loading="lazy"
              class="img-fluid"
              :alt="product.prodName"
            />
          </template>
          <template #cardBody>
            <h5 class="card-title fw-bold">{{ product.prodName }}</h5>
            <p class="lead">
              <span class="text-success fw-bold">Amount</span>: R{{
                product.amount
              }}
            </p>
            <p>{{ product.category }}</p>
            <div
              class="button-wrapper d-md-flex d-block justify-content-between"
            >
              <button class="btn btn-dark justify-content-center">View</button>
            </div>
          </template>
        </card-comp>
      </div>
    </div>
  </section> -->

  <!-- Features Section -->
  <div class="sectionContainer sectionContainer__features" id="features">
    <div class="container">
      <h2>Why Choose JayMar Climbing?</h2>
      <div class="row">
        <div class="col-md-4 feature-item">
          <h3>High-Quality Gear</h3>
          <p>We offer only the best gear for safety and performance.</p>
        </div>
        <div class="col-md-4 feature-item">
          <h3>Expert Advice</h3>
          <p>Our team is made up of climbing experts ready to help you.</p>
        </div>
        <div class="col-md-4 feature-item">
          <h3>Customer Satisfaction</h3>
          <p>We pride ourselves on great customer service and support.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import CardComp from "@/components/CardComp.vue";

export default {
  name: "HomeView",
  components: {
    // CardComp,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
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
