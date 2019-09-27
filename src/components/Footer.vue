<template>
  <footer>
    <a class="contact" href="https://nashvilleslices.com/contact">Contact</a>
    <span class="copyright" v-html="settings.footer" />
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
    font-size: .95rem;
    padding: .5rem 0 2rem;
    text-align: center;
    color:  grey;
    font-weight: 100;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 -2px 8px transparentize(black, .90);
    // height: 30px;
    display: flex;
    width: 100%;
    padding: 1em 2em;
    justify-content: space-between;
  }

  footer * {
    line-height: 1.5;
  }

  .contact {
    border: none !important;
    text-decoration: none;
    border: none;
    // text-transform: uppercase;

    &:hover {
      color: black;
      text-decoration: 1px solid black !important;
      border-bottom: 1px solid black !important;
    }
  }

  .copyright {
    border: none;
    text-decoration: none;
    border: none;
  }

</style>