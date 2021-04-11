<template>
  <div class="logo-wrapper">
    <button type="button">
      <Icon name="titleSarahMaxi" />
      <Icon
        class="heart"
        name="heartOutline"
      />
    </button>
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
$logoHeightMobile: 31;
$logoWidthMobile: 260;
$logoHeightDesktop: 35;
$logoWidthDesktop: 290;

.logo-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  height: pxToRem($logoHeightMobile);
  margin: pxToRem($offsetMobile) 0 pxToRem($interModuleSpacingMobile);

  @include mq-desktop {
    position: sticky;
    top: pxToRem(46);
    left: 0;
    right: 0;
    height: pxToRem($logoHeightDesktop);
    margin-bottom: pxToRem(-$logoHeightDesktop);
  }
}

.logo-wrapper button {
  display: flex;
  width: pxToRem($logoWidthMobile);
  height: pxToRem($logoHeightDesktop);
  padding: 0;
  background: $colorBride;
  border: none;
  color: $colorGroom;

  @include mq-desktop {
    position: absolute;
    right: pxToRem(-$logoWidthDesktop);
    width: pxToRem($logoWidthDesktop);
    height: pxToRem($logoHeightDesktop);
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
