<template>
  <Layout>
    <div class="container">
      <Hero />
      <ProjectsGrid :projects="$page.projects.edges" />
    </div>
  </Layout>
</template>

<page-query>
  query Posts {
  	projects: allProjectPost {
      edges {
        node {
          id
          date (format: "YYYY")
          title
          categories
          thumbnail (quality: 90)
          path
        }
      }
    }
  }
</page-query>

<script>
  import Hero from "@/components/Hero"
  import ProjectsGrid from "@/components/ProjectsGrid"

  export default {
    components: {
      Hero,
      ProjectsGrid,
    }
  }
</script>

<style lang="scss">
  .container {
    margin-bottom: 1em;
  }
</style>