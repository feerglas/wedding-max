<template>
  <div class="logo-wrapper">
    <Icon name="titleSarahMaxi" />
    <Icon
      class="heart"
      name="heartOutline"
    />
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue';

export default {
  name: 'Logo',
  props: {},
  components: {
    Icon,
  },
};
</script>

<style scoped lang="scss">
$logoHeightMobile: 26;
$logoWidthMobile: 223;
$logoHeightDesktop: 35;
$logoWidthDesktop: 290;

.logo-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  height: pxToRem($logoHeightMobile);
  margin: pxToRem($offsetMobile) 0;

  @include mq-desktop {
    position: sticky;
    top: pxToRem(46);
    left: 0;
    right: 0;
    height: pxToRem($logoHeightDesktop);
    margin-bottom: pxToRem(-$logoHeightDesktop);
  }
}

.heart {
  margin: 0 pxToRem(24) 0 pxToRem(24);
}

</style>
