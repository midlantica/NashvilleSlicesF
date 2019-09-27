<template>
  <header :class="{sticky: $route.path === '/' || $route.path.includes('/projects/')}">
    <colorBar />
    <div class="headContainer">

      <g-link class="logoBlock" :to="{ name: 'home' }">
        <div class="nashvilleN"></div>
        <div class="logoType" alt="Nashville Slices">Nashville Slices</div>
      </g-link>

      <div class="searchBox">
        <!-- <input type="search" name="Search" placeholder="Search..."> -->
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
        settings: require("../../data/theme.json"),
        adsenseContent: ''
      }
    }
  }
</script>

<style lang="scss">
  // @import '_base.scss';

  header {
    position: relative;
    height: 80px;
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
    margin-top: 6px;
    &:hover {
      cursor: pointer;
      text-decoration: none;
    }

      // .nashvilleN {
      //   min-width: 40px;
      // }

      .nashvilleN {
        width: 40px;
        height: 40px;
        min-width: 40px;
        background: url(../assets/img/nashvilleSliceN.svg);
        background-size: cover;
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
        font-size: 1.3rem;
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
  
  // MY ORIGINAL BEAUTIFUL SEARCH INPUT 
  .headContainer .searchBox {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    flex-basis: 25%;
    align-items: center;
    margin-top: 6px;

    // @media (min-width: 500px) {
    //   // flex-basis: 10%;
    //   width: 100%;
    // }
    
    input {
      font-family: barlow-light, Helvetica, Arial, sans-serif;
      color: rgba(128, 128, 128, 1);
      width: 100% !important;
      height: 2em !important;
      padding: .25em 1em;
      background: rgba(255, 255, 255, 0.75);
      min-width: 240px;
      // 
      border-radius: 6px;
      border: none !important;
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

  // FOR GOOGLE SEARCH HTML
  .headContainer .searchBox {
    //
    .gsc-input-box {
      border: none !important;
    }

    input {
      padding: 12px 12px !important;
    }

    .gsc-control-cse-en {
      padding: 0;
    }

    .gsc-search-button-v2 {
      padding: 8px !important;
      border-radius: 40px !important;
      background: #363636  !important;
    }

    .gsc-results-wrapper-visible {
      top: 70px !important;
      width: 90% !important;
      right: 20px !important;
      //
      position: absolute !important;
      background: white !important;
      padding: 1em !important;
      border-radius: 0.5em !important;
      box-shadow: 0 4px 13px 0px #00000021 !important;
    }

    .g_sib_a {
      width: 120px !important;
    }

    .gsc-input {
      width: 120px !important;
    }

  }

</style>








