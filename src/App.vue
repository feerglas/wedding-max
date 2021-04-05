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
@import 'scss/webfonts.scss';
@import 'scss/typo.scss';
@import 'scss/base.scss';

#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
}

@media (max-width: $desktopWidth - 1) {
  flex-direction: column;
}

</style>
