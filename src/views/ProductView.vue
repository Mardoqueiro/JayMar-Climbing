<!-- ProductDetailView.vue -->
<template>
  <div v-if="product">
    <h1>{{ product.prodName }}</h1>
    <img :src="product.prodUrl" loading="lazy" class="img-fluid" :alt="product.prodName"/>
    <div class="pcontent">
      <p><strong>Amount:</strong> R{{ product.amount }}</p>
      <p><strong>Category:</strong> {{ product.category }}</p>
      <p><strong>Quantity:</strong> {{ product.quantity }}</p>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetailView',
  data() {
    return {
      product: null
    };
  },
  mounted() {
    this.$store.dispatch('fetchProduct', this.$route.params.id).then(() => {
      this.product = this.$store.state.product;
    });
  }
}
</script>
<style>

.pcontent{
  text-align: center;
}

</style>