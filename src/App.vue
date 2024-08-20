<template>
  <div class="wrapper">
    <nav-bar-comp/>
  <main>
    <router-view />
  </main>
  <footer-comp/>
  </div>
  
</template>
<script>
import FooterComp from '@/components/FooterComp.vue';
import NavBarComp from './components/NavBarComp.vue';
export default {
  components: {
    NavBarComp,
    FooterComp
  }
}
</script>
<style src="@/assets/css/style.css">

</style>
