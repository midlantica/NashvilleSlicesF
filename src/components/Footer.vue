<template>
  <footer>
    <div class="marB1" >
      <a href="https://nashvilleslices.com/contact">Contact</a>
    </div>
    <span v-html="settings.footer" />
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

<style lang="scss" scoped>
  footer {
    font-size: 0.8rem;
    padding: 2rem 0 3rem;
    text-align: center;
    color:  grey;
    font-weight: 100;
    background: rgba(255, 255, 255, 0.90);
    // 
    position: fixed;
    z-index: 10;
    bottom: 0;
    left: 0;
    width: 100%;
    box-shadow: 0 -2px 8px transparentize(black, .85);
  }

  .marB1 {
    margin-bottom: .5em;
  }
</style>