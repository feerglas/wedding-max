<template>

  <div :class="sublabel ? 'has-sublabel' : ''">

    <label>

      <input
        type="checkbox"
        :value="value"
        :checked="modelValue"
        @change="updateInput"
      >

      {{label}}
      <span v-if="sublabel">{{sublabel}}</span>

    </label>

  </div>

</template>

<script>
export default {
  name: 'Checkbox',
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    value: String,
    modelValue: {
      default: false,
    },
    label: String,
    sublabel: String,
  },
  methods: {
    updateInput(event) {
      this.$emit('change', event.target.checked);
    },
  },
};
</script>

<style scoped lang="scss">
</style>
