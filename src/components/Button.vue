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
    buttonClicked(e) {
      this.$emit('click', e);
    },
  },
};
</script>

<style scoped lang="scss">
</style>
