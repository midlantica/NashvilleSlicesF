<template>
  <div class="projects">
    <div class="project" v-for="item in projects" :key="item.node.id">
      <g-link :to="item.node.path" class="project-link">
      <g-image
        :src="item.node.thumbnail"
        :alt="item.node.title"
        class="thumbnail"
      />
      <h3 class="project-title">{{ item.node.title }}</h3>
      <div class="categories">
        <span class="category" v-for="(item, index) in item.node.categories" :key="index">{{ item }}</span>
      </div>
      </g-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      projects: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>
  .projects {
/*     display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    // */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    padding: 0 2em;
  }

  .project {
    /* grid-column: auto / span 2;
    text-align: center; 
    */
    margin: 0 0 1em 0;
    text-align: center;
    border-radius: 2px;    
    max-width: calc(100% / 3 - 10%);
    min-width: 260px;
    margin: 10px;
    height: 360px;
    background: white;
    box-shadow: 0px 0px 2px -1px rgba(0,0,0,0.5);
  }

  @media (max-width: 660px) {
    .project {
      max-width: calc(100% / 2 - 10%);
      min-width: 85%;
    }
  }

  @media (max-width: 500px) {
    .project {
      max-width: calc(100%);
      min-width: 260px;
    }
  }

  .project:hover {
    transform: scale(1.02);
    box-shadow: 0 20px 40px -20px rgba(0,0,0,0.25);
  }

  .project-link {
    text-decoration: none;
  }

  .thumbnail {
    height: 240px;
    object-fit: cover;
    border-radius: 2px 2px 0px 0px;
    transition: all 0.15s ease;
    box-shadow: 0 0 40px -20px rgba(0,0,0,0.25);
  }

  .project-title {
    font-size: 1rem;
    color: var(--color-contrast);
    margin: 0.5rem 0.5em 0.4rem;
    font-weight: 400;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;
  }

  .categories {
    font-size: 0.8rem;
    color: var(--color-contrast-1);
    font-weight: 200;
    padding:  0 .25em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    height: calc(4em + -2px);
    overflow: hidden;
  }

  .category {
    margin: .2em 0.1rem 1em;
    background: hsla(0, 0%, 95%, 0.9);
    padding: 0.25em 1em .3em;
    border-radius: 2.25em;
    font-size: 0.85em;
    display: inline-block;
  }

</style>
