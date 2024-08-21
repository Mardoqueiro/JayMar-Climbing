<template>
  <!-- <div class="container">
      <div class="row">
          <h2 class="display-2">Products</h2>
      </div>
      <div class="row gap-2 justify-content-center my-2" v-if="products">
          <Card v-for="product in products" :key="product.prodID">
              <template #cardHeader>
                  {{ product.productURL }}
                  <img :src="product.prodURL" loading="lazy" class="img-fluid" :alt="product.prodName">
              </template>
              <template #cardBody>
                  <h5 class="card-title fw-bold">{{ product.prodName }}</h5>
                  <p class="lead"><span class="text-success fw-bold">Amount</span>: R{{ product.amount }}</p>
                  <div class="button-wrapper d-md-flex d-block justify-content-between">
                      <router-link :to="{ name: 'product', params: { id: product.productID } }">
                          <button class="btn btn-success">View</button>
                      </router-link>
                      <button class="btn btn-dark">Cart</button>
                  </div>
              </template>
          </Card>
      </div>
      <div v-else>
          <Spinner />
      </div>
  </div> -->

  <div>
    <h1>Products Page</h1>
      <p>
      {{ products }}
    </p>
  </div>
</template>
<script>
// import NavBarComp from '@/components/NavBarComp.vue'
// import FooterComp from '@/components/FooterComp.vue'
export default {
  name: "ProductsView",
  components: {
    // NavBarComp,
    // FooterComp
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
<style></style>
