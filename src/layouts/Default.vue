<template>
  <div class="layout" :class="{ 'sticky-header': $route.path === '/' }">
    <Header />

    <slot/>

    <Footer />
  </div>
</template>

<script>
  import Header from "@/components/Header"
  import Footer from "@/components/Footer"

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
  }

  body {
    --color-base: rgb(255, 255, 255);
    --color-base-1: rgb(243, 243, 243);
    --color-contrast: rgb(0, 0, 0);
    --color-contrast-1: rgb(43, 43, 43);
    font-family: Barlow,-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    margin:0;
    padding: 0;
    font-size: 1em;
    background: var(--color-base);
    background: #f8f8f8;
    color: var(--color-contrast);
    transition: background 0.5s ease;
  }

  body.dark {
    --color-base: rgb(0, 0, 0);
    --color-base-1: rgb(43, 43, 43);
    --color-contrast: rgb(255, 255, 255);
    --color-contrast-1: rgb(243, 243, 243);
  }

  .layout {
    padding: 0;
    padding: 8rem 0 0 0;
    margin: 0 auto;
    max-width: 1600px;
  }

  .layout.sticky-header {
    // max-width: 1600px;
  }

  a {
    color: inherit;
  }

  img {
    max-width: 100%;
  }

  .label {
    display: block;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  
</style>
