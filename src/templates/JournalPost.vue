<template>
  <Layout>
    <h1>{{ $page.journalPost.title }}</h1>
    <p class="intro">{{ $page.journalPost.excerpt }}</p>
    <VueRemarkContent />
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
  query JournalPost ($id: ID!) {
    journalPost(id: $id) {
      title
      excerpt
    }
  }
</page-query>

<script>
  export default {
    //
  }
</script>

<style lang="scss" scoped>
  //
</style>
