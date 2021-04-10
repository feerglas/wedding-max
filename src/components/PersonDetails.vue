<template>

  <div>

    <h2>Person 1</h2>

    <Input
      type="text"
      icon="user"
      id="name1"
      label="Dein Vorname & Nachname"
      autocomplete="username"
      :required="true"
      error-empty="Deinen Namen muss ich wissen..."
      :validation="$v.name"
    />

  </div>

</template>

<script>
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';
import Input from '@/components/Input.vue';

export default {
  name: 'PersonDetails',
  mixins: [validationMixin],
  components: {
    Input,
  },
  computed: {
    name: {
      get() {
        return this.$store.getters.name1;
      },
      set(newValue) {
        this.$store.commit('setName1', newValue);
      },
    },
  },
  validations: {
    name: {
      required,
    },
  },
};
</script>

<style scoped lang="scss">
</style>
