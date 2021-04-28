<template>
  <div class="logo-wrapper header-logo-icon" v-if="showEasterEgg">
    <button
      type="button"
      @mouseenter="showEasterEggImage"
      @mouseleave="hideEasterEggImage"
    >
      <Icon
        name="titleSarahMaxi"
        class="text-icon"
      />
      <Icon
        v-if="heart"
        class="heart"
        name="heartOutline"
      />
    </button>
  </div>
  <div class="logo-wrapper" v-else>
    <Icon
      name="titleSarahMaxi"
      class="text-icon"
    />
    <Icon
      v-if="heart"
      class="heart"
      name="heartOutline"
    />
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue';

export default {
  name: 'Logo',
  props: {
    heart: {
      type: Boolean,
    },
    showEasterEgg: {
      type: Boolean,
    },
  },
  components: {
    Icon,
  },
  methods: {
    showEasterEggImage() {
      this.$emit('show-easter-egg-image');
    },
    hideEasterEggImage() {
      this.$emit('hide-easter-egg-image');
    },
  },
};
</script>

<style scoped lang="scss">
.logo-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: pxToRem($interModuleSpacingMobile);
  color: $colorGroom;
  background: none;
  border: 0;

  @include mq-desktop {
    margin-bottom: pxToRem(interModuleSpacingDesktop);
  }

}

button {
  display: flex;
  justify-content: center;
  background: none;
  border: 0;
  padding: 0;
  color: $colorGroom;
}

.text-icon {
  height: 100%;
}

.heart {
  height: 100%;
  margin-top: pxToRem(2);
  margin-left: pxToRem(20);

  @include mq-desktop {
    margin-left: pxToRem(24);
  }
}

</style>
