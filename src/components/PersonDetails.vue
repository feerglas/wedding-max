<template>

  <div>

    <h2 class="title">{{title}}</h2>

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
      class="select-food"
      :options="['Essen wählen', 'Wasser', 'Brot']"
      :placeholder="true"
      @input="selectChanged"
    />

    <Checkbox
      class="single-checkbox"
      value="allergics"
      label="Allergien und Unverträglichkeiten"
      v-model="checkboxSelectionAllergics"
    />

    <textarea
      class="textarea"
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
  props: {
    title: String,
    nameStore: Object,
  },
  computed: {
    name: {
      get() {
        return this.$store.getters[this.nameStore.getter];
      },
      set(newValue) {
        this.$store.commit(this.nameStore.setter, newValue);
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

.title {
  font-size: pxToRem(18);
  color: $colorGroom;
  margin-bottom: pxToRem(6);
}

.select-food {
  width: pxToRem(300);
}

.single-checkbox {
  margin-top: pxToRem(16);
}

.textarea {
  margin-top: pxToRem(16);
  width: 100%;
  padding: pxToRem(12) pxToRem(16) pxToRem(12) pxToRem(16);
  font-family: $fontRegular;
  font-size: pxToRem(16);
  color: $colorGroomsMan;
}

</style>
