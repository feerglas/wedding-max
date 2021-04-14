<template>
<nav>
    <ul class="reset-list">
      <li v-for="(navItem, index) in items.navItems" :key="index">
        <a
          :href="`#${navItem.hash}`"
          :class="{'is-active': activeNavItem == index}"
          @click="setActiveNavItem(index)"
        >
          <Icon name="HeartOutline" />
          {{navItem.label}}
        </a>
      </li>
    </ul>
    <router-link
      tag="button"
      type="button"
      to="/registration"
      class="button"
    >
        Anmelden
    </router-link>
</nav>
</template>

<script>

import Icon from './Icon.vue';

export default {
  name: 'Nav',
  components: {
    Icon,
  },
  props: {
    activeNavItem: Number,
    items: Object,
  },
  methods: {
    setActiveNavItem(index) {
      this.$emit('update-active-nav-item', index);
    },
  },
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
    position: sticky;
    top: 0;
    width: 100%;
    height: pxToRem(59);
    line-height: pxToRem(59);
    overflow-x: scroll;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    background: $colorBride;
    z-index: 5;
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

  a.is-active {
    font-family: $fontBold;
  }

  nav > button {
    position: fixed;
    display: block;
    width: calc(100% - #{pxToRem(32)});
    left: pxToRem(16);
    right: pxToRem(16);
    bottom: pxToRem(12);
    z-index: 2;
    box-shadow: 0 pxToRem(4) pxToRem(128) rgba(30, 67, 106, 0.08);
  }

  svg {
    display: none;
  }

}

@media (min-width: $desktopWidth) {
  nav {
    position: fixed;
    width: pxToRem(250);
    margin-top: pxToRem($interElementSpacing);
    margin-left: pxToRem(-275);
    padding-left: pxToRem(25);
  }

  li {
    margin: 0 0 pxToRem($interElementSpacing) 0;
  }

  a {
    position: relative;
  }

  svg {
    position: absolute;
    left: pxToRem(-32);
    top: pxToRem(3);
    width: pxToRem(20);
    height: pxToRem(20);
    opacity: .000001;
    transform: scale3d(.55,.55,.55);
    transition: opacity 225ms ease-in-out,
                transform 225ms ease-in-out;
    transform-origin: center center;
  }

  a:focus,
  a:hover {
    text-decoration: underline;
  }

  .is-active svg {
    opacity: .999999;
    transform: scale3d(1,1,1);
  }

}

</style>
