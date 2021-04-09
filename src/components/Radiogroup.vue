<template>

  <div>

    <label
      v-for="radio in radios.items"
      :key="radio.id"
    >

      <input
        type="radio"
        :name="radios.id"
        :checked="radio.value === modelValue"
        :value="radio.value"
        @change="updateValue(radio.value)"
      />

      {{radio.label}}

    </label>

  </div>

</template>

<script>
export default {
  name: 'Radiogroup',
  props: {
    radios: Object,
    modelValue: {
      default: '',
    },
  },
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  created() {
    this.$emit('change', this.modelValue);
  },
  methods: {
    updateValue(value) {
      this.$emit('change', value);
    },
  },
};
</script>

<style scoped lang="scss">
</style>
