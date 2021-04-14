<template>
<nav>
    <ul class="reset-list">
        <li><a href="#anreise">Anreise</a></li>
        <li><a href="#uebernachtung">Übernachtung</a></li>
        <li><a href="#geschenkideen">Geschenkideen</a></li>
        <li><a href="#gettogether">Get Together</a></li>
        <li><a href="#hochzeitsfeier">Hochzeitsfeier</a></li>
        <li><a href="#kontakt">Kontakt</a></li>
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

ul {
  @include list-reset();
}

a {
  @include text-1();
  white-space: nowrap;
  color: $colorGroom;
  text-decoration: none;
}

@media (max-width: $desktopWidth - 1) {
  nav {
    width: 100%;
    overflow-x: scroll;
  }

  nav > a {
    display: none;
  }

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  li {
    display: inline-flex;
  }

  li:first-child {
    margin-left: pxToRem($offsetMobile);
  }

  li:last-child {
    padding-right: pxToRem($offsetMobile);
  }

  li:not(:first-child) {
    margin-left: pxToRem($interElementSpacing);
  }

  a {
    white-space: nowrap;
  }

}

@media (min-width: $desktopWidth) {
  nav {
      position: fixed;
      display: flex;
      flex-direction: column;
      flex: 0 0 pxToRem(250);
      width: pxToRem(250);
      margin-top: pxToRem($interElementSpacing);
      margin-left: pxToRem(-275);
      padding-left: pxToRem(25);
  }

  li {
    margin: 0 0 pxToRem($interElementSpacing) 0;
  }

}

</style>
