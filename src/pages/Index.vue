<template>
  <Layout>
    <div class="container">
      <Hero />
      <ProjectsGrid :projects="$page.projects.edges" />
      <Pager class="pager" :info="$page.projects.pageInfo"/>
    </div>
  </Layout>
</template>

<page-query>
  query Posts($page: Int) {
  	projects: allProjectPost(perPage: 12, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
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
  import { Pager } from 'gridsome'

  export default {
    metaInfo: {
      title: 'Home',
      meta: [
        { 
          name: 'Home', 
          content: 'Home page' 
        }
      ]
    },
    components: {
      Hero,
      ProjectsGrid,
      Pager
    }
  }
</script>

<style lang="scss">
  .container {
    margin-bottom: 5em;
  }

  nav {
    margin: 2em .5em 1em;
    text-align: center;
    font-size: 1em;

    a {
      margin: 0em .5em;
      text-decoration: none;
      background: lighten(grey, 40);
      color: black;
      border-radius: 2em;
      padding: .25em .75em;

      &:hover {
        color: black;
      }

      &.active--exact.active {
        color: white;
        background: rgba(24, 217, 24, 0.6);
      }
    }
  }

</style>


