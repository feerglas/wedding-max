<template>
  <router-link
    to="/"
    class="header-logo"
  >
    <Logo
      :heart="true"
      class="header-logo-icon"
    />
  </router-link>
</template>

<script>
import Logo from '@/components/Logo.vue';

export default {
  name: 'Header',
  components: {
    Logo,
  },
};
</script>

<style scoped lang="scss">
.header-logo {
  flex-basis: 100%;
  display: block;
  height: pxToRem($logoHeightMobile);
  margin: pxToRem(32) 0;

  @include mq-desktop {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: pxToRem($logoHeightDesktop);
    position: fixed;
    top: 0;
    right: 0;
  }

}

.header-logo-icon {
  height: 100%;
  margin: 0;

  @include mq-desktop {
    width: pxToRem(290);
    margin-right: pxToRem(85);
  }
}

</style>
