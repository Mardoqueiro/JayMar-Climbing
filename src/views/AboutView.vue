<template>
    <div>

      <h1>About Us</h1>
    <!-- About Section -->
<section class="about-section">
  <div class="container">
    <h2>About JayMar Climbing</h2>
    <p>
      Welcome to JayMar Climbing, your ultimate destination for top-quality rock climbing gear and equipment. Founded by passionate climbers Mardoqueiro and Jayden, JayMar Climbing was born out of a shared love for the mountains and a commitment to empowering climbers of all levels.
    </p>
    <p>
      At JayMar Climbing, we understand that the right gear can make all the difference in your climbing experience. That’s why we meticulously select and offer a curated range of products, from rock climbing shoes to harnesses, ropes, and safety equipment, ensuring that every item meets the highest standards of durability, functionality, and performance.
    </p>
    <p>
      Our mission is simple: to provide climbers with the tools they need to conquer their next adventure, whether you’re scaling your first indoor wall or tackling a challenging outdoor ascent. We believe in supporting the climbing community by offering not just products, but also expert advice, tips, and resources to help you reach new heights.
    </p>
    <p>
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
  Container for the About section
.about-section {
  background-color: #f7f7f7; /* Light grey background */
  padding: 60px 20px; /* Spacing around the section */
  color: #333; /* Text color */
  font-family: 'Arial', sans-serif;
}

/* Container inside the About section */
.about-section .container {
  max-width: 800px; /* Max width for content */
  margin: 0 auto; /* Center the content */
  text-align: left; /* Left-align the text */
}

/* Heading style */
.about-section h2 {
  font-size: 36px; /* Larger heading */
  color: #2c3e50; /* Darker text color */
  margin-bottom: 20px; /* Space below heading */
  text-align: center; /* Center the heading */
  font-family: 'Roboto', sans-serif;
}

/* Paragraph style */
.about-section p {
  font-size: 18px; /* Standard paragraph text size */
  line-height: 1.6; /* Increase line spacing for readability */
  margin-bottom: 20px; /* Space between paragraphs */
  font-family: 'Roboto', sans-serif;
}

/* Optional: Add some padding to the last paragraph */
.about-section p:last-child {
  margin-bottom: 0;
}

</style>
