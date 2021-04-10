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
      v-model="alergics"
      @input="textareaChange"
    ></textarea>

  </div>

</template>

<script>
import { validationMixin } from 'vuelidate';
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
      alergics: '',
    };
  },
  props: {
    title: String,
    nameStore: Object,
    index: Number,
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
      required: false,
    },
  },
  methods: {
    selectChanged(value) {
      const currentState = this.$store.getters.reservation;

      if (this.index === 0) {
        currentState.wedding.food = value;
      } else {
        currentState.wedding.person2.food = value;
      }

      this.$store.commit('setReservation', currentState);
    },
    textareaChange() {
      const currentState = this.$store.getters.reservation;

      if (this.index === 0) {
        currentState.wedding.alergics = this.alergics;
      } else {
        currentState.wedding.person2.alergics = this.alergics;
      }

      this.$store.commit('setReservation', currentState);
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
