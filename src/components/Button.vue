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

.button {
  color: red;
}

.button:disabled {
  opacity: .5;
}

</style>
