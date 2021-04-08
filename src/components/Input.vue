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

    <div class="icon-placeholder">
      <Icon :name="icon" />
    </div>

    <div
      class="input-error"
      v-if="!validation.required && validation.$dirty"
    >{{errorEmpty}}</div>

    <div
      class="input-error"
      v-if="!validation.minLength"
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
};
</script>

<style scoped lang="scss">
</style>
