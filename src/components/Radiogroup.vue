<template>

  <div>

    <label
      :for="radio.id"
      v-for="radio in radios.items"
      :key="radio.id"
    >

      <input
        type="radio"
        :id="radio.id"
        :name="radios.id"
        :checked="radio.value === selected"
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
    selected: String,
    foo: String,
  },
  model: {
    event: 'change',
  },
  created() {
    this.$emit('change', this.selected);
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
