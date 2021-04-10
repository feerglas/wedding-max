<template>
  <div>
    <h1>Ich nehme gerne teil</h1>

    <form>

      <!-- Get together -->
      <fieldset>

        <div class="radio-checkbox-wrapper">
          <Checkbox
            class="checkboxes"
            value="gettogether"
            label="Get together"
            sublabel="Freitag, 20.08.2021"
            v-model="checkboxSelectionEventGettogether"
            @change="checkboxChange"
          />

          <Radiogroup
            v-if="checkboxSelectionEventGettogether"
            :radios="radioDataGettogether"
            v-model="radioSelectionGettogether"
            @change="radioChange"
          />
        </div>

      </fieldset>

      <!-- Wedding -->
      <fieldset>

        <div class="radio-checkbox-wrapper">
          <Checkbox
            class="checkboxes"
            value="wedding"
            label="Hochzeitsfeier"
            sublabel="Samstag, 20.08.2021"
            v-model="checkboxSelectionEventWedding"
            @change="checkboxChange"
          />

          <Radiogroup
            v-if="checkboxSelectionEventWedding"
            :radios="radioDataWedding"
            v-model="radioSelectionWedding"
            @change="radioChange"
          />
        </div>

        <div v-if="checkboxSelectionEventWedding">
          <PersonDetails
            class="person-details"
            title="Person 1"
            :nameStore="{ getter: 'name1', setter: 'setName1'}"
            :index="0"
          />

          <PersonDetails
            class="person-details"
            v-if="radioSelectionWedding === '2'"
            title="Person 2"
            :nameStore="{ getter: 'name2', setter: 'setName2'}"
            :index="1"
          />
        </div>

      </fieldset>

      <p
        v-if="!this.formIsValid && this.formError.length > 0"
        class="form-error"
      >{{formError}}</p>

      <Button
        text="Absenden"
        @click="submit"
        :disable="formDisabled"
      />

    </form>

  </div>
</template>

<script>
import Checkbox from '@/components/Checkbox.vue';
import Radiogroup from '@/components/Radiogroup.vue';
import PersonDetails from '@/components/PersonDetails.vue';
import Button from '@/components/Button.vue';

const radioData = {
  items: [
    {
      value: '1',
      id: '1person',
      label: '1 Person',
    },
    {
      value: '2',
      id: '2person',
      label: '2 Personen',
    },
  ],
};

const radioDataWedding = {
  id: 'radiosWedding',
  ...radioData,
};

const radioDataGettogether = {
  id: 'radiosGettogether',
  ...radioData,
};

export default {
  name: 'Registration2',
  components: {
    Checkbox,
    Radiogroup,
    PersonDetails,
    Button,
  },
  data() {
    return {
      radioSelectionGettogether: '1',
      radioSelectionWedding: '1',
      checkboxSelectionEventGettogether: false,
      checkboxSelectionEventWedding: false,
      radioDataWedding,
      radioDataGettogether,
      formIsValid: true,
      formError: '',
      formDisabled: false,
    };
  },
  methods: {
    checkboxChange() {
      const currentState = this.$store.getters.reservation;

      currentState.getTogether.join = this.checkboxSelectionEventGettogether;
      currentState.wedding.join = this.checkboxSelectionEventWedding;

      this.$store.commit('setReservation', currentState);
    },
    radioChange() {
      const currentState = this.$store.getters.reservation;

      currentState.getTogether.persons = this.radioSelectionGettogether;
      currentState.wedding.persons = this.radioSelectionWedding;

      this.$store.commit('setReservation', currentState);
    },
    submit(e) {
      e.preventDefault();

      // make sure at least one checkbox is checked
      if (!this.checkboxSelectionEventGettogether && !this.checkboxSelectionEventWedding) {
        this.formIsValid = false;
        this.formError = 'Du misst mindestens einen Event anwählen.';
        return;
      }

      // Validations for checkbox wedding
      const { reservation } = this.$store.getters;

      if (this.checkboxSelectionEventWedding) {
        // make sure name of person 1 is set
        if (this.$store.getters.name1 < 1) {
          this.formIsValid = false;
          this.formError = 'Name bei Peson 1 fehlt';
          return;
        }

        // make sure food of person 1 is set
        if (reservation.wedding.food.length < 1) {
          this.formIsValid = false;
          this.formError = 'Person 1 muss ein Essen auswählen';
          return;
        }
      }

      // Validations for person 2
      if (this.checkboxSelectionEventWedding && this.radioSelectionWedding === '2') {
        // make sure name of person 2 is set
        if (this.$store.getters.name2 < 1) {
          this.formIsValid = false;
          this.formError = 'Name bei Peson 2 fehlt';
          return;
        }

        // make sure food of person 1 is set
        if (reservation.wedding.person2.food.length < 1) {
          this.formIsValid = false;
          this.formError = 'Person 2 muss ein Essen auswählen';
          return;
        }
      }

      this.formIsValid = true;
      this.formError = '';
      this.formDisabled = true;

      this.$emit('submit');
    },
  },
};
</script>

<style scoped lang="scss">
.radio-checkbox-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.checkboxes {
  margin-right: pxToRem(12);
}

.person-details {
  margin-bottom: pxToRem(24);
}

.form-error {
  @include text-4();
  color: $colorError;
  padding: pxToRem(10) 0 0;
}
</style>
