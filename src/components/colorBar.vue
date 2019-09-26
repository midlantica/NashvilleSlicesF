<template>
  <div class="colorBar">
    <span class="colItem colorGreen" />
    <span class="colItem colorAqua" />
    <span class="colItem colorBlue" />
    <span class="colItem colorRed" />
    <span class="colItem colorOrange" />
    <span class="colItem colorYellow" />
  </div>
</template>

<style lang="scss" scoped>
  .colorBar {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    // position: relative;
    position: fixed;
    z-index: 200;
    // flex-basis: 100%;
    width: 100%;

    .colItem {
      flex-grow: 1;
      height:  6px;
      
      &.colorGreen {
        // background: $rainbowMap('one');
        background: desaturate(lighten(#00be00, 10), 20);
        // background: @extend $red-100;
      }

      &.colorAqua {
        background: desaturate(lighten(#0099ff, 10), 20);
      }

      &.colorBlue {
        background: desaturate(lighten(#0700ff, 10), 20);
      }

      &.colorRed {
        background: desaturate(lighten(#e10000, 10), 20);
      }
      
      &.colorOrange {
        background: desaturate(lighten(#ff5f04, 10), 20);
      }
      
      &.colorYellow {
        background: desaturate(lighten(#fdf800, 10), 20);
      }
    }
  }
</style>