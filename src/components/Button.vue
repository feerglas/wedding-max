<template>
  <button
    class="button"
    :disabled="disable"
  >{{ text }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    disable: Boolean,
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
}

.button:focus,
.button:hover {
  background-color: $colorPriest;
}

.button:disabled {
  opacity: .5;
}

</style>
