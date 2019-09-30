<template>
  <Layout>
    <div class="container">
      <div class="contactWrap">
        <div class="contact-header">
          <h1 class="sucess">Success 😀</h1>
          <p><g-link to="/">Home page</g-link></p>
        </div>

      </div>
    </div>
  </Layout>
</template>

<script>
  
</script>

<style lang="scss" scoped>

  

  .contact-header {
    padding: 0.5rem 0 1rem 0;
    font-family: barlow-regular, Helvetica, Arial, sans-serif;

    & * {
      text-align: center;
    }
  }

  .contact-title {
    font-size: 1.5rem;
    font-weight: 100;
    margin: 0 0 2rem 0;
    padding: 0;
  }

  .contactWrap {
    padding: 0 1em;
  }

  @media (min-width: 900px) {
    .contactWrap {
      padding: 0 8em;
    }
  }

  @media (min-width: 1200px) {
    .contactWrap {
      padding: 0 12em;
    }
  }


</style>

