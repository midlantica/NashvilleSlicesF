<template>
  <div class="hero">
    <!-- <h1 class="hero-title" v-html="settings.hero_title" /> -->
    <h1 class="hero-title" v-html="settings.hero_subtitle" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json")
    }
  }
}
</script>

<style lang="scss">
  .hero {
    text-align: center;
    max-width: 80%;
    margin: 0 auto;
    padding: 1rem 0 1rem 0;
  }

  .hero-title {
    font-size: 1.75rem;
    font-weight: 300;
    padding: 0;
    margin: 0 0 1rem 0;
    color: #464646;
    letter-spacing: -0.01em;
  }
  
  .hero-title p,
  .hero-subtitle p {
    margin: 0;
    padding: 0;
  }

  .hero-subtitle {
    font-size: 1.15em;
    font-weight: 400;
    line-height: 1.68;
    padding: 0;
    margin: 0;
    opacity: 0.6;
  }
</style>
