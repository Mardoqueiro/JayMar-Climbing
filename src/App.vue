<template>
  <NavBar />
  <main>
    <router-view />
  </main>
  <Footer/>
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
