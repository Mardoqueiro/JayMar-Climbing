<template>
  <div>
     <!-- <nav-bar-comp/> -->
     <h1>Product</h1>
     <div v-for="product in products" :key="product">
          <div>
            <img :src="product.prodUrl" loading="lazy" class="img-fluid" :alt="product.prodName"/>
        
         
            <h5 class="card-title fw-bold">{{ product.prodName }}</h5>
            <p class="lead"><span class="text-success fw-bold">Amount</span>: R{{product.amount}}</p>
            <p>{{ product.category }}</p>
          </div>
            
            <div class="button-wrapper d-md-flex d-block justify-content-between">
              <!-- <router-link :to="{ name: 'product', params: { id: product.prodID , } }">
                            <button class="btn btn-success">View</button>
                        </router-link> -->
              <!-- <button class="btn btn-dark">View</button> -->
              <!-- product modal -->
              
  

                    
     
            </div>
        </div>
  </div>
</template>
<script>
// import NavBarComp from '@/components/NavBarComp.vue'
// import FooterComp from '@/components/FooterComp.vue'
export default {
  name: 'ProductView',
components: {
  // NavBarComp,
  // FooterComp
},
computed: {
    products() {
      return this.singleproduct;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
}
</script>
<style>
  
</style>