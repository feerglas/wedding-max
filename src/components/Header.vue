<template>
  <div class="header-logo header" v-if="showEasterEgg">
    <Logo
      :heart="true"
      :showEasterEgg="showEasterEgg"
      @show-easter-egg-image="showEasterEggImage"
      @hide-easter-egg-image="hideEasterEggImage"
    />
  </div>
  <div v-else>
    <router-link
      to="/"
      class="header-logo"
    >
      <Logo
        :heart="true"
        class="logo-wrapper header-logo-icon"
      />
    </router-link>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue';

export default {
  name: 'Header',
  props: {
    showEasterEgg: {
      type: Boolean,
    },
  },
  methods: {
    showEasterEggImage() {
      this.$emit('show-easter-egg-image');
    },
    hideEasterEggImage() {
      this.$emit('hide-easter-egg-image');
    },
  },
  components: {
    Logo,
  },
};
</script>

<style scoped lang="scss">
.header-logo {
  position: relative;
  z-index: 1;
  flex-basis: 100%;
  display: block;
  height: pxToRem($logoHeightMobile);
  margin: pxToRem(32) 0;
  pointer-events: none;

  @include mq-desktop {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: pxToRem($logoHeightDesktop);
    position: fixed;
    top: 0;
    right: 0;
    transition: opacity .2s ease-in;
    transition-delay: .2s;
  }

}

.header-logo:has(button):hover {
  @include mq-desktop {
    opacity: 0;
    transition-delay: 0s;
  }

  &:before {
    display: none;
  }

}

.header-logo:before {
  @include mq-desktop {
    content: '';
    position: absolute;
    top: pxToRem(-$interElementSpacing);
    bottom: pxToRem(-$interElementSpacing);
    right: 0;
    width: calc(#{pxToRem(290 + 85)} + #{pxToRem($interElementSpacing)});
    background: $colorBackground;
    z-index: -1;
  }
}

.header-logo-icon {
  height: 100%;
  margin: 0;
  pointer-events: all;

  @include mq-desktop {
    width: pxToRem(290);
    margin-right: pxToRem(85);
  }
}

</style>
