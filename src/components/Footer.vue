<template>
  <footer class="footer">
    <div class="container">
      <span v-html="settings.footer" />
    </div>
  </footer>
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

<style scoped>
  .footer {
    font-size: 0.8rem;
    padding: 2rem 0 3rem;
    text-align: center;
    /* font-size: 2rem; */
    color:  grey;
    font-weight: 100;
  }
</style>