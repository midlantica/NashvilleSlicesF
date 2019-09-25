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
    <div class="headContainer">
      <div class="left flexOne">
        <div class="logoBlock clearfix">
          <g-link :to="{ name: 'home' }">
            <svg class="nashSymbol" width="50px" height="50px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="N-symbol">
                        <g id="Group">
                            <rect class="nashSymbolBack" fill="#313131" x="4.97379915e-14" y="4.97379915e-14" width="50" height="50"></rect>
                            <polygon class="nashSymbolN" fill="#FFFFFF" fill-rule="nonzero" points="10.7743803 7.5 35.4144199 32.9778253 35.4143803 11.972 30.3380062 8.16537883 44.2619339 8.16537883 39.2653803 11.912 39.2657191 42.5 14.6256795 17.0221747 14.6250661 37.556 19.6619938 41.3330597 5.73806605 41.3330597 10.7740661 37.555"></polygon>
                        </g>
                    </g>
                </g>
            </svg>
            <div class="logo" :alt="settings.site_name">
              {{ settings.site_name }}
            </div>
          </g-link>
        </div>
      </div>
      <nav class="right">
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

  header > .headContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    margin: 0 2.15em;
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
    flex-grow: 0;
    align-self: center;
  }

  .logoBlock {
    display: block;
    overflow: both;

    &:hover {
      cursor: pointer;
    }

    &:hover .nashSymbol .nashSymbolBack {
      fill: navy;
    }

    &:hover .logo {
      color: navy;
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

      &:hover {
        color: navy;
      }
    }
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
    // margin-top: 4px;
    // margin-right: 3rem;
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
    color: #313131;
    font-weight: 200;
    font-size: 1.25em;
    
    &:hover {
      text-decoration: none;
      color: #313131;
    }
  }

  nav > *:hover {
    border-color: inherit;
  }

  nav > .active {
    border-color: inherit;
  }

</style>
