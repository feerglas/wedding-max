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

    <Select
      :options="['Wasser', 'Brot']"
      :default="'Wasser'"
      @input="selectChanged"
    />

    <Checkbox
      value="allergics"
      label="Allergien und Unverträglichkeiten"
      v-model="checkboxSelectionAllergics"
    />

    <textarea
      v-if="checkboxSelectionAllergics"
      placeholder="Bitte beschreiben..."
      name="allergis"
      rows="5"
      :value="allergics"
    ></textarea>

  </div>

</template>

<script>
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';
import Input from '@/components/Input.vue';
import Select from '@/components/Select.vue';
import Checkbox from '@/components/Checkbox.vue';

export default {
  name: 'PersonDetails',
  mixins: [validationMixin],
  components: {
    Input,
    Select,
    Checkbox,
  },
  data() {
    return {
      checkboxSelectionAllergics: false,
      allergics: '',
    };
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
  methods: {
    selectChanged(value) {
      console.log('change', value);
    },
  },
};
</script>

<style scoped lang="scss">
</style>
