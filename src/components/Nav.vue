<template>
<nav>
    <ul class="reset-list">
        <li><a class="text-1" href="#anreise">Anreise</a></li>
        <li><a class="text-1" href="#uebernachtung">Übernachtung</a></li>
        <li><a class="text-1" href="#geschenkideen">Geschenkideen</a></li>
        <li><a class="text-1" href="#gettogether">Get Together</a></li>
        <li><a class="text-1" href="#hochzeitsfeier">Hochzeitsfeier</a></li>
        <li><a class="text-1" href="#kontakt">Kontakt</a></li>
    </ul>
    <router-link to="/registration">
        <Button text="Anmelden" />
    </router-link>
</nav>
</template>

<script>

import Button from '@/components/Button.vue';

export default {
  name: 'Nav',
  components: {
    Button,
  },
  props: {},
};
</script>

<style scoped lang="scss">
@import '../scss/variables.scss';
@import '../scss/functions.scss';

ul {
    list-style: none;
    padding: 0;
}

@media (min-width: $desktopWidth) {
  nav {
      display: flex;
      flex-direction: column;
      flex-basis: pxToRem(250);
      width: pxToRem(250);
      padding-left: pxToRem(25);
  }

  li {
    margin-bottom: pxToRem(24);
  }

  a {
      text-decoration: none;
  }
}

</style>
