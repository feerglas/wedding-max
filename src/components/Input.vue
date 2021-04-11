<template>
  <div
    class="form-group"
    :class="{ 'form-group-error': validation.$error }"
  >

    <input
      :id="id"
      class="input"
      :autocomplete="autocomplete"
      :name="id"
      :label="label"
      :type="type"
      :required="required ? true : false"
      v-model.trim="validation.$model"
    />

    <label
      :for="id"
      class="label"
    >{{label}}</label>

    <Icon
      :name="icon"
       class="icon"
    />

    <div
      class="input-error"
      v-if="!validation.required && validation.$dirty && errorEmpty"
    >{{errorEmpty}}</div>

    <div
      class="input-error"
      v-if="!validation.minLength && errorWrong"
    >{{errorWrong}}</div>

  </div>
</template>

<script>
import Icon from '@/components/Icon.vue';

export default {
  name: 'Input',
  components: {
    Icon,
  },
  props: {
    value: String,
    type: String,
    icon: String,
    validation: Object,
    id: String,
    label: String,
    autocomplete: String,
    required: Boolean,
    errorEmpty: String,
    errorWrong: String,
  },
  created() {
    if (this.validation && this.value) {
      this.validation.$model = this.value;
    }
  },
};

</script>

<style scoped lang="scss">
.label,
.input:focus + label {
  position: absolute;
  top: pxToRem(5);
  left: pxToRem(36);
  height: pxToRem(20);
  line-height: 1.6;
  color: $colorGroom;
  transition: top 100ms ease-in-out, transform 100ms ease-in-out;
  transform: scale(0.8);
  transform-origin: top left;
}

.form-group {
  position: relative;
  padding-left: pxToRem(36);
  margin-bottom: pxToRem($gutterHeight * 2);
  border-bottom: pxToRem(1) solid $colorBridesMaid;
}

.form-group .icon {
  position: absolute;
  top: pxToRem(16);
  left: 0;
  width: pxToRem(24);
  height: pxToRem(24);
  transition: top 100ms ease-in-out;
}

.input {
  @include text-2();
  //width: 100%;
  height: pxToRem(18);
  margin: pxToRem($interElementSpacing) 0;
  border: none;
  color: $colorGroom;

  @include mq-medium {
    width: auto;
  }
}

.input:focus,
.input:invalid {
  outline: none;
  border: none;
  box-shadow: none;
}

.input:invalid:not(:focus) + .label {
  top: pxToRem($interElementSpacing);
  color: $colorGroomsMan;
  pointer-events: none;
  transform: scale(1);
}

.input:invalid:not(:focus) + * + .icon  {
  top: pxToRem(26);
}

.input-error {
  position: absolute;
  bottom: pxToRem(4);
  @include form-error;
}
</style>
