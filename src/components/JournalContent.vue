<template>
  <div 
    class="journal-content"
    v-html="content"
  />
</template>

<script>
  export default {
    props: {
      content: String
    }
  }
</script>

<style>
  p {
    line-height: 1.5;
    font-size: 1.15rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.25rem;
  }
  
  h4, h5, h6 {
    font-size: 1rem;
  }
</style>
