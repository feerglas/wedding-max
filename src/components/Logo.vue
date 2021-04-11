<template>
  <div class="logo-wrapper">
    <button type="button">
      <Icon name="titleSarahMaxi" />
      <Icon
        v-if="heart !== 'false'"
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
  props: {
    heart: {
      type: String,
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

  @include mq-desktop {
    margin-bottom: pxToRem(interModuleSpacingDesktop);
  }
}

.logo-wrapper button {
  display: flex;
  padding: 0;
  background: none;
  border: none;
  color: $colorGroom;
}

.logo-wrapper--detail-page {
  height: pxToRem($logoHeightMobile);
  margin: pxToRem($offsetMobile) 0 pxToRem($interModuleSpacingMobile);

  @include mq-desktop {
    position: sticky;
    top: pxToRem(46);
    left: 0;
    right: 0;
    width: pxToRem($logoWidthDesktop);
    height: pxToRem($logoHeightDesktop);
    margin-bottom: pxToRem(-$logoHeightDesktop);
  }
}

.logo-wrapper--detail-page button {
  width: pxToRem($logoWidthMobile);
  height: pxToRem($logoHeightMobile);

  @include mq-desktop {
    position: absolute;
    right: pxToRem(-426);
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
