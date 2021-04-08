<template>
  <button
    class="button"
    :class="secondary ? 'secondary' : ''"
    :disabled="disable"
    @click="buttonClicked"
  >{{ text }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    disable: Boolean,
    secondary: Boolean,
  },
  methods: {
    buttonClicked() {
      this.$emit('click');
    },
  },
};
</script>

<style scoped lang="scss">

$buttonHeight: 48;

.button {
  display: flex;
  padding: 0 pxToRem(20);
  color: $colorBride;
  background-color: $colorGroom;
  border-radius: pxToRem(2);
  height: pxToRem($buttonHeight);
  line-height: pxToRem($buttonHeight - 4);
  font-family: $fontBold;
  font-size: pxToRem(16);
  border: 0;
  cursor: pointer;
}

.button:focus,
.button:hover {
  background-color: $colorPriest;
}

.button:disabled {
  opacity: .5;
}

.button.secondary {
  color: $colorGroom;
  background-color: transparent;
  border: pxToRem(2) solid $colorGroom;
}

.button.secondary:focus,
.button.secondary:hover {
  border-color: $colorPriest;
  color: $colorPriest;
}

</style>
