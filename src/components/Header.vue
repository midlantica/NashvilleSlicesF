<template>
  <header :class="{sticky: $route.path === '/' || $route.path.includes('/projects/')}">
    <div class="colorBar">
      <span class="colItem colorGreen" />
      <span class="colItem colorAqua" />
      <span class="colItem colorBlue" />
      <span class="colItem colorRed" />
      <span class="colItem colorOrange" />
      <span class="colItem colorYellow" />
    </div>
    <div class="container">
      <div class="left flexOne">
        <g-link :to="{ name: 'home' }" class="home-link">

          <svg class="nashSymbol" width="50px" height="51px" viewBox="0 0 50 51" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="header">
                      <g id="N-symbol">
                          <g id="Group-15-Copy-3">
                              <rect id="Rectangle-Copy-16" fill="#313131" x="0" y="0.5" width="50" height="50"></rect>
                              <g id="Group-14-Copy-2" transform="translate(5.576957, 8.230337)" fill="#FFFFFF" fill-rule="nonzero">
                                  <path d="M5.178413,0.769662921 L29.8184525,26.2474882 L29.8180987,5.24166292 L24.7420388,1.43504175 L38.6659666,1.43504175 L33.6690987,5.18166292 L33.6697517,35.7696629 L9.02971217,10.2918377 L9.02909871,30.8256629 L14.0660265,34.6027226 L0.142098706,34.6027226 L5.17809871,30.8246629 L5.178413,0.769662921 Z" id="Combined-Shape"></path>
                              </g>
                          </g>
                      </g>
                  </g>
              </g>
          </svg>
          <div class="logo" :alt="settings.site_name">
            {{ settings.site_name }}
          </div>
        </g-link>
      </div>
      <nav class="right">
        <!-- <g-link class="nav__link" to="/journal">Journal</g-link> -->
        <g-link class="contact" to="/contact">Contact</g-link>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        settings: require("../../data/theme.json")
      }
    }
  }
</script>

<style lang="scss">

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

  header > .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  .colorBar {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    flex-basis: auto;
  }

  .colItem {
    flex-grow: 1;
    height:  6px;
  }

  .colorGreen {
    // background: $rainbowMap('one');
    background: #00be00;
    // background: @extend $red-100;
  }

  .colorAqua {
    background: #0099ff;
  }

  .colorBlue {
    background: #0700ff;
  }

  .colorRed {
    background: #e10000;
  }
  
  .colorOrange {
    background: #ff5f04;
  }
  
  .colorYellow {
    background: #fdf800;
  }

  .home-link {
    text-decoration: none;
  }

  .flexOne {
    flex-grow: 1;
    align-self: center;
  }

  .nashSymbol {
    float: left;
    display:  block;
  }

  .logo {
    font-size: 1.5em;
    color: black;
    float: left;
    margin: 0.4em 0 0 .5em;
  }

  .site-name {
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-decoration: none;
    text-transform: uppercase;   
  }

  nav > * {
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    margin-top: 4px;
    margin-right: 3rem;
    padding-bottom: 4px;
    border-bottom: 1px solid;
    border-color: transparent;
    transition: border 0.15s;
  }

  nav a {
    color:  black;
  }

/*   nav > *:last-of-type {
    margin: 0;

  } */

  nav > .contact {
    /* color: red; */
    /* font-family: barlow-light; */
    font-weight: 200;
    font-size: 1.25em;
  }

  nav > *:hover {
    border-color: inherit;
  }

  nav > .active {
    border-color: inherit;
  }

</style>
