<template>
  <div class="logo-wrapper">
    <Icon name="titleSarahMaxi" />
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
  },
  components: {
    Icon,
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
  @include mq-desktop {
    margin-bottom: pxToRem(interModuleSpacingDesktop);
  }
}

.logo-wrapper--detail-page {
  width: pxToRem($logoWidthMobile);
  height: pxToRem($logoHeightMobile);
  margin: pxToRem($offsetMobile) 0 pxToRem($interModuleSpacingMobile);

  @include mq-desktop {
    position: sticky;
    top: pxToRem(46);
    left: 0;
    margin-left: pxToRem(426);
    width: pxToRem($logoWidthDesktop);
    height: pxToRem($logoHeightDesktop);
    margin-bottom: pxToRem(-$logoHeightDesktop);
  }
}

.heart {
  height: pxToRem(30);
  margin-top: pxToRem(2);
  margin-left: pxToRem(20);

  @include mq-desktop {
    margin-left: pxToRem(24);
  }

}

</style>
