<template>
  <div class="logo-wrapper">
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
