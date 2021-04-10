<template>

  <label
    :class="sublabel ? 'has-sublabel' : ''"
    class="container"
  >

    <div class="checkbox-wrapper">
      <input
        class="checkbox"
        type="checkbox"
        :value="value"
        :checked="modelValue"
        @change="updateInput"
      >
      <span class="checkmark-wrapper">
        <Icon
          name="checkmark"
          class="checkmark"
        />
      </span>

      <div>
        <span>{{label}}</span>
        <span
          v-if="sublabel"
          class="sublabel"
        >{{sublabel}}</span>
      </div>

    </div>

  </label>

</template>

<script>
import Icon from '@/components/Icon.vue';

export default {
  name: 'Checkbox',
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  components: {
    Icon,
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
$checkboxWidth: 24;

.container {
  display: block;
}

.checkbox-wrapper {
  color: $colorGroomsMan;
  height: auto;
  position: relative;
  padding: 0 0 0 calc(#{pxToRem($checkboxWidth)} + #{pxToRem(8)});
  margin: 0;
  cursor: pointer;
  font-size: pxToRem(14);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.container.has-sublabel .checkbox-wrapper {
  padding: 0 0 0 calc(#{pxToRem($checkboxWidth)} + #{pxToRem(48)});
  color: $colorGroom;
  font-family: $fontBold;
  font-size: pxToRem(20);
}

.sublabel {
  display: block;
  font-family: $fontRegular;
  font-size: pxToRem(16);
  line-height: pxToRem(26);
}

.checkbox {
  position: absolute;
  display: none;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark-wrapper {
  position: absolute;
  top: calc(50% - #{pxToRem($checkboxWidth / 2)});
  left: 0;
  height: pxToRem($checkboxWidth);
  width: pxToRem($checkboxWidth);
  background-color: $colorBride;
  border: 1px solid $colorGroomsMan;
  border-radius: pxToRem(2);
  color: $colorGroom;
}

.container.has-sublabel .checkmark-wrapper:after {
  content: '';
  display: block;
  position: absolute;
  width: 1px;
  height: pxToRem($checkboxWidth);
  top: 0;
  left: pxToRem($checkboxWidth + 24);
  background: $colorGroom;
  opacity: .2;
}

.checkmark {
  display: none;
  width: 100%;
  height: 100%;
  color: currentColor;
}

.checkbox-wrapper:hover {
  color: $colorGroom;
}

.checkbox-wrapper:hover .checkbox ~ .checkmark-wrapper {
  border-color: $colorGroom;
}

.checkbox-wrapper .checkbox:checked ~ .checkmark-wrapper .checkmark {
  display: block;
}

</style>
