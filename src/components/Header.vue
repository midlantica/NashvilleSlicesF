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

      <div class="logoBlock">
        <g-link :to="{ name: 'home' }">
          <svg class="nashSymbol" width="50px" height="50px" 
            version="1.1" xmlns="http://www.w3.org/2000/svg" 
            xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="N-symbol">
                      <g id="Group">
                          <rect class="nashSymbolBack" fill="#313131" x="4.97379915e-14" y="4.97379915e-14" width="50" height="50"></rect>
                          <polygon class="nashSymbolN" fill="#FFFFFF" fill-rule="nonzero" points="10.7743803 7.5 35.4144199 32.9778253 35.4143803 11.972 30.3380062 8.16537883 44.2619339 8.16537883 39.2653803 11.912 39.2657191 42.5 14.6256795 17.0221747 14.6250661 37.556 19.6619938 41.3330597 5.73806605 41.3330597 10.7740661 37.555"></polygon>
                      </g>
                  </g>
              </g>
          </svg>
        </g-link>

        <g-link class="logoTypeBox" :to="{ name: 'home' }">
          <div class="logoType" :alt="settings.site_name">
            {{ settings.site_name }}
          </div>
        </g-link>

      </div>

      <div class="searchBox">
        <input type="search" name="Search" placeholder="Search...">
      </div>

      <div class="rightSide">
        <g-link class="contact" to="/contact">
          <svg width="35px" height="30px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                  <g id="header" transform="translate(-1202.000000, -12.000000)" stroke="#231F20">
                      <g id="contact" transform="translate(1203.000000, 13.300000)">
                          <g id="Group-5">
                              <path d="M15.6868828,21.4896552 L9.04827586,27.1448276 L9.04827586,21.4896552 L3.00037677,21.4896552 C1.34331444,21.4896552 0,20.145381 0,18.4903051 L0,2.99935003 C0,1.34285475 1.34694856,0 2.99773327,0 L29.8022667,0 C31.4578691,0 32.8,1.34427418 32.8,2.99935003 L32.8,18.4903051 C32.8,20.1468004 31.4571624,21.4896552 29.7995396,21.4896552 L15.6868828,21.4896552 Z" id="Stroke-313" stroke-width="2"></path>
                              <path d="M7.13026759,5.65517241 L19.9652469,5.65517241" id="Stroke-314" stroke-width="2"></path>
                              <path d="M7.13026759,10.27788 L25.6696193,10.27788" id="Stroke-315" stroke-width="2"></path>
                              <path d="M7.13026759,14.7034483 L25.6696193,14.7034483" id="Stroke-316" stroke-width="2"></path>
                          </g>
                      </g>
                  </g>
              </g>
          </svg>
        </g-link>
      </div>

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

  .colorBar {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    flex-basis: auto;

    .colItem {
      flex-grow: 1;
      height:  6px;
      
      &.colorGreen {
        // background: $rainbowMap('one');
        background: lighten(desaturate(#00be00, 10), 10);
        // background: @extend $red-100;
      }

      &.colorAqua {
        background: lighten(desaturate(#0099ff, 10), 10);
      }

      &.colorBlue {
        background: lighten(desaturate(#0700ff, 10), 10);
      }

      &.colorRed {
        background: lighten(desaturate(#e10000, 10), 10);
      }
      
      &.colorOrange {
        background: lighten(desaturate(#ff5f04, 10), 10);
      }
      
      &.colorYellow {
        background: lighten(desaturate(#fdf800, 10), 10);
      }
    }
  }

  .headContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    height: 100%;
    margin: 0 2em;

    .logoBlock {
      flex-grow: 0;
      align-self: center;
      display: block;
      overflow: both;
      flex-basis: 225px;

      &:hover {
        cursor: pointer;
      }

      &:hover svg.nashSymbol .nashSymbolBack {
        fill: black;
      }

      &:hover .logoType {
        color: black;
      }

      svg.nashSymbol {
        float: left;
        display:  block;
      }

      .logoTypeBox {
        // 

        @media (max-width: 900px) {
          display: none;
        }

        .logoType {
          font-size: 1.5em;
          color: black;
          float: left;
          margin: 0.4em 0 0 .5em;

          &:hover {
            color: black;
          }
        }
      }

    }
  }

  .searchBox {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    // justify-content: center;
    // align-items: center;
    // align-content: center;
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
      // box-shadow: 0px 3px 8px -5px lighten(grey, 40);
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

  .rightSide {
    display: flex;
    flex-basis: 225px;
    justify-content: flex-end;

    a.contact {
      color: #313131;
      font-weight: 100;
      font-size: 1.25em;
      text-decoration: none;
      padding-bottom: 4px;
      border-bottom: 1px solid;
      border-color: transparent;
      transition: border 0.15s;
      text-align: right;

      &:hover {
        text-decoration: none;
        color: #313131;
        border-color: inherit;
      }
      
      &:active {
        border-color: inherit;
      }

      svg {
        fill: red;
      }
      
    }

  }

</style>
