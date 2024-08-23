<template>
  <div class="sectionContainer sectionContainer__header" id="home">
    <div class="row align-items-center">
      <div class="headerContentContainer">
        <div class="headerImage">
          <img class="animate__animated animate__backInDown"
            src="https://mardoqueiro.github.io/all_images/JayMar/prod/sideImg/EdgeClimb.png"
            loading="lazy"
            alt="JayMar Climbing"
          />
        </div>
        <div class="headerContent">
          <h1 class="animate__animated animate__fadeInRight">JayMar Climbing</h1>
          <p class="animate__animated animate__fadeInLeft">For Rock Climbing Enthusiasts</p>
          <p class="animate__animated animate__fadeInUp">
            Explore our range of high-quality climbing gear and accessories.
          </p>
          <button class="btn btn-primary">
            <a href="/products" class="btn-link">Shop Now</a>
          </button>
        </div>
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
<style scoped>
/* General styles for the header section */
.sectionContainer__header {
  padding: 40px;
  background-color: #61481c; /* Light grey background */
}

/* Container to hold the image and content */
.headerContentContainer {
  display: flex;
  align-items: center;
  flex-wrap: wrap; /* Allows wrapping for responsive design */
  gap: 20px; /* Adds space between items */
}

/* Image styling */
.headerImage {
  flex: 1;
  max-width: 50%; /* Limits image width */
  padding: 10px;
}

.headerImage img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

/* Content styling */
.headerContent {
  flex: 1;
  max-width: 50%; /* Limits content width */
  padding: 20px;
  text-align: left;
}

.headerContent h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.headerContent p {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.btn-primary {
  background-color: #f2f2f2;
  color: #e6b325;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
}

.btn-primary:hover {
  background-color: #E6B325;
}

.btn-link {
  color: #61481c;
  text-decoration: none;
}

@media (max-width: 768px) {
  .headerContentContainer {
    flex-direction: column;
  }

  .headerImage,
  .headerContent {
    max-width: 100%;
  }

  .headerContent {
    text-align: center;
  }
}

button.btn {
  background-color: #f2f2f2;
}
</style>
