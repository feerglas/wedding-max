<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">

@import 'scss/variables.scss';
@import 'scss/functions.scss';
@import 'scss/mixins.scss';

/* Webfonts */
@font-face {
  font-family: 'GT Haptik Regular';
  src: url('webfonts/GT-Haptik-Regular.woff2') format('woff2');
  font-display: swap;
}

@font-face {
  font-family: 'GT Haptik Bold';
  src: url('webfonts/GT-Haptik-Bold.woff2') format('woff2');
  font-display: swap;
}

html {
  font-size: 100%;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $colorGroomsMan;
}

body {
  margin: 0;
  padding: 0;
  background: $colorBride;
  text-align: center;
  font-family: $fontRegular;
}

#app {
  margin: 0 auto;
}

.title-1 {
  @include title-1;
}

.title-2 {
  @include title-2;
}

.title-3 {
  @include title-3;
}

.title-4 {
  @include title-4;
}

.text-1 {
  @include text-1;
}

.text-2 {
  @include text-2;
}

.text-3 {
  @include text-3;
}

.text-4 {
  @include text-4;
}

.list {
  @include list-reset;
}

a {
  color: $colorGroom;
}

p:not(:last-child),
p:not(:only-child) {
  margin: 0 0 pxToRem($interElementSpacing) 0;
}

img {
  width: 100px;
  height: 100px;
  border: 1px solid red;
}

@media (min-width: 64rem) {
  .title-1 {
    font-size: pxToRem(48);
   }

   #app {
     display: flex;
     width: pxToRem(960);
     text-align: left;
   }
}
</style>
