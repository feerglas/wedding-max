<template>
  <button class="button">{{ buttonText }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    buttonText: String,
  },
};
</script>

<style scoped lang="scss">

.button {
  color: red;
}

</style>
