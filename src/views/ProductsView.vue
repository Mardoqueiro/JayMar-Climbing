<template>
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
          <div class="button-wrapper d-md-flex d-block justify-content-between">
            <!-- <router-link :to="{ name: 'product', params: { id: product.prodID , } }">
                          <button class="btn btn-success">View</button>
                      </router-link> -->
            <button class="btn btn-dark justify-content-center">View</button>
          </div>
        </template>
      </card-comp>
    </div>
  </div>
</template>
<script>
// import NavBarComp from '@/components/NavBarComp.vue'
// import FooterComp from '@/components/FooterComp.vue'
import CardComp from "@/components/CardComp.vue";
export default {
  name: "ProductsView",
  components: {
    // NavBarComp,
    // FooterComp
    CardComp,
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
</style>
