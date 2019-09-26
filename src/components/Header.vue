<template>
  <header :class="{sticky: $route.path === '/' || $route.path.includes('/projects/')}">
    <colorBar />
    <div class="headContainer">

      <g-link class="logoBlock" :to="{ name: 'home' }">
        <div class="nashvilleN"></div>
        <div class="logoType" alt="Nashville Slices">Nashville Slices</div>
      </g-link>

      <div class="searchBox">
        <input type="search" name="Search" placeholder="Search...">
        <div>
          <!-- <script async src="https://cse.google.com/cse.js?cx=016659713516728385973:w42dhavlhis"></script> -->
        </div>
<div class="gcse-search"></div>
      </div>

    </div>

  </header>
</template>

<script>
  import colorBar from '@/components/colorBar'
  export default {
    components: {
      colorBar
    },
    data() {
      return {
        settings: require("../../data/theme.json")
      }
    }
  }
</script>

<style lang="scss">
  // @import '_base.scss';

  header {
    position: relative;
    height: 6rem;
    z-index: 10;
    background: rgba(255, 255, 255, 0.85);
    border-bottom: 1px solid #f1f3f5;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: 0 2px 8px transparentize(black, .90);
  }

  .headContainer {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    height: 100%;
    margin: 0 2em;

    @media (max-width: 500px) {
      margin: 0 1.5em;
    }
  }
  
  .headContainer a.logoBlock {
    display: flex;
    justify-content: flex-start;
    flex-grow: 0;
    text-decoration: none;
    align-items: center;
    &:hover {
      cursor: pointer;
      text-decoration: none;
    }

      // .nashvilleN {
      //   min-width: 50px;
      // }

      .nashvilleN {
        width: 50px;
        height: 50px;
        min-width: 50px;
        background: url(../assets/img/nashvilleSliceN.svg);
        &:hover {
          fill: black;
        }

        .polyN {
          fill: #2A2A2A;
          &:hover {
            fill: black;
          }
        }

      }

      .logoType {
        font-size: 1.5rem;
        color: #4d4d4d;
        margin: 0em 0 0 .5em;
        text-decoration: none;
        line-height: 1;
        &:hover {
          color: black;
          text-decoration: none;
        }
      }

    }
  

  .headContainer .searchBox {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    flex-basis: 25%;
    justify-content: flex-end;

    // @media (min-width: 500px) {
    //   // flex-basis: 10%;
    //   width: 100%;
    // }
    
    input {
      font-family: barlow-light, Helvetica, Arial, sans-serif;
      color: rgba(128, 128, 128, 1);
      width: 100%;
      height: 2em;
      padding: .25em 1em;
      background: rgba(255, 255, 255, 0.75);
      min-width: 240px;
      // 
      border-radius: 6px;
      border: none;
      // border: 1px solid white;
      box-shadow: 0 1px 6px -2px #cbcbcb;
      // transition: all .25s;
      
      @media (max-width: 600px) {
        min-width: initial;
        width: 150px;
      }

      // @media (max-width: 400px) {
      //   min-width: initial;
      //   width: 100px;
      // }

      &::placeholder {
        color: lighten(grey, 25);
      }

      &:focus {
        outline: none;
      }
    }

  }

</style>
