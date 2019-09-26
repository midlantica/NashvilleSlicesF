<template>
  <header :class="{sticky: $route.path === '/' || $route.path.includes('/projects/')}">

    <div class="headContainer">

        <g-link class="logoBlock" :to="{ name: 'home' }">
          <div class="nashvilleN"></div>
          <!-- <img class="nashvilleN" src="@/assets/img/nashvilleSliceN.svg" alt="Nashville Slice N"> -->
          <div class="logoType" alt="Nashville Slices">Nashville Slices</div>
        </g-link>

      <!-- 
      <div class="searchBox">
        <input type="search" name="Search" placeholder="Search...">
      </div>
      -->

      <div class="rightSide">
        <g-link class="contact" to="/contact">
          <img src="@/assets/img/iconComment.svg" alt="iconComment">
        </g-link>
      </div>

    </div>

  </header>
</template>

<script>
  export default {
    components: {
      //
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

    // @media (min-width: 500px) {
    //   // flex-basis: 10%;
    //   width: 100%;
    // }
    
    input {
      align-item: center;
      color: black;
      width: 100%;
      min-width: 240px;
      height: 2em;
      border: 1px solid #fff;
      border: none;
      border-bottom: 1px solid #ccc;
      border-left: 1px solid lighten(#ccc, 10);
      border-right: 1px solid lighten(#ccc, 10);
      box-shadow: inset 0px 1px 6px -4px lighten(grey, 20);
      background: #fff;
      padding: .25em 1em;
      font-family: barlow-light, Helvetica, Arial, sans-serif;
      transition: all .25s;
      
      @media (max-width: 500px) {
        min-width: initial;
        width: 150px;
      }

      @media (max-width: 400px) {
        min-width: initial;
        width: 100px;
      }

      &::placeholder {
        color: lighten(grey, 25);
      }

      &:focus {
        outline: none;
      }
    }

  }

  .headContainer .rightSide {
    display: flex;
    justify-content: flex-end;

    a.contact {
      color: #313131;
      font-weight: 100;
      font-size: 1.25em;
      transition: border 0.15s;
      text-align: right;
      margin-top: .3em;
      text-decoration: none;

      @media (min-width: 500px) {
        color: red;
      }

      &:hover {
        color: #313131;
      }
      
      &:active {
        border-color: inherit;
      }
      
    }

  }

</style>
