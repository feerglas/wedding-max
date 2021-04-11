<template>

  <div class="wrapper">

    <label
      v-for="radio in radios.items"
      :key="radio.id"
      class="container"
    >

      <div class="radio-wrapper">
        <input
          class="radio"
          type="radio"
          :name="radios.id"
          :checked="radio.value === modelValue"
          :value="radio.value"
          @change="updateValue(radio.value)"
        />

        <span class="checkmark"></span>

        <span>{{radio.label}}</span>

      </div>

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

$radioWidth: 24;
$radioInnerWidth: 12;

.wrapper {
  display: flex;
  flex-wrap: wrap;
}

.container {
  display: block;
  line-height: pxToRem($radioWidth);
}

.container {
  width: 100%;

  @include mq-desktop {
    width: auto;
  }
}

.container:not(:last-child) {
  margin-bottom: pxToRem(12);

  @include mq-desktop {
    margin-right: pxToRem(12);
    margin-bottom: 0;
  }
}

.radio-wrapper {
  color: $colorGroomsMan;
  height: auto;
  position: relative;
  padding: 0 0 0 calc(#{pxToRem($radioWidth)} + #{pxToRem(8)});
  margin: 0;
  cursor: pointer;
  font-size: pxToRem(16);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.radio {
  position: absolute;
  display: none;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: calc(50% - #{pxToRem($radioWidth / 2)});
  left: 0;
  height: pxToRem($radioWidth);
  width: pxToRem($radioWidth);
  background-color: $colorBride;
  border: 1px solid $colorGroomsMan;
  border-radius: 100%;
  color: $colorGroom;
}

.checkmark:after {
  position: absolute;
  content: '';
  display: none;
  width: pxToRem($radioInnerWidth);
  height: pxToRem($radioInnerWidth);
  left: calc(#{pxToRem($radioWidth / 2)} - #{pxToRem($radioInnerWidth / 2)} - 1px);
  top: calc(#{pxToRem($radioWidth / 2)} - #{pxToRem($radioInnerWidth / 2)} - 1px);
  background-color: currentColor;
  border-radius: 100%;
}

.radio-wrapper:hover {
  color: $colorGroom;
}

.radio-wrapper:hover .radio ~ .checkmark {
  border-color: $colorGroom;
}

.radio-wrapper .radio:checked ~ .checkmark:after {
  display: block;
}

</style>
