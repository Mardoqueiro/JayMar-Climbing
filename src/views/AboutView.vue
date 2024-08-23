<template> 
    <div>
<section class="about-section">
  <div class="container">
    <h2 class="animate__animated animate__fadeInDown">JayMar Climbing</h2>
    <p class="animate__animated animate__fadeInLeft">
      Welcome to JayMar Climbing, your ultimate destination for top-quality rock climbing gear and equipment. Founded by passionate climbers Mardoqueiro and Jayden, JayMar Climbing was born out of a shared love for the mountains and a commitment to empowering climbers of all levels.
    </p>
    <p class="animate__animated animate__fadeInRight">
      At JayMar Climbing, we understand that the right gear can make all the difference in your climbing experience. That’s why we meticulously select and offer a curated range of products, from rock climbing shoes to harnesses, ropes, and safety equipment, ensuring that every item meets the highest standards of durability, functionality, and performance.
    </p>
    <p class="animate__animated animate__fadeInLeft">
      Our mission is simple: to provide climbers with the tools they need to conquer their next adventure, whether you’re scaling your first indoor wall or tackling a challenging outdoor ascent. We believe in supporting the climbing community by offering not just products, but also expert advice, tips, and resources to help you reach new heights.
    </p>
    <p class="animate__animated animate__fadeInRight">
      Join us on this journey, and let JayMar Climbing be your trusted partner in every climb. Because at JayMar, we’re not just about selling gear; we’re about fueling your passion for the climb.
    </p>
  </div>
</section>

  </div>
</template>
<script>

// import NavBarComp from '@/components/NavBarComp.vue'
// import FooterComp from '@/components/FooterComp.vue'


export default {
  name: 'AboutView',
  components: {
    // NavBarComp,
    // FooterComp
  }
}
</script>
<style scoped>

.about-section {
  background-color: #f7f7f7;
  padding: 60px 20px; 
  color: #333; 
  font-family: 'Arial', sans-serif;
}


.about-section .container {
  max-width: 800px; 
  margin: 0 auto; 
  text-align: left; 
}

.about-section h2 {
  font-size: 36px; 
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: center; 
  font-family: 'Roboto', sans-serif;
}
 
.about-section p {
  font-size: 18px;  
  line-height: 1.6;  
  margin-bottom: 20px; 
  font-family: 'Roboto', sans-serif;
}

.about-section p:last-child {
  margin-bottom: 0;
}

</style>
