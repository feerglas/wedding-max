<template>
  <div>
    <h1 class="title-1">Ich nehme gerne teil</h1>

    <form class="form">

      <!-- Get together -->
      <fieldset>

        <div class="radio-checkbox-wrapper">
          <Checkbox
            class="checkboxes"
            :class="{ checked : checkboxSelectionEventGettogether }"
            value="gettogether"
            label="Get together"
            sublabel="Freitag, 20.08.2021"
            v-model="checkboxSelectionEventGettogether"
            @change="checkboxChange"
          />

          <Radiogroup
            class="radios"
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
            :class="{ checked : checkboxSelectionEventWedding }"
            value="wedding"
            label="Hochzeitsfeier"
            sublabel="Samstag, 20.08.2021"
            v-model="checkboxSelectionEventWedding"
            @change="checkboxChange"
          />

          <Radiogroup
            class="radios"
            v-if="checkboxSelectionEventWedding"
            :radios="radioDataWedding"
            v-model="radioSelectionWedding"
            @change="radioChange"
          />
        </div>

        <div
          v-if="checkboxSelectionEventWedding"
          class="persons-wrapper"
        >
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

      <p
        v-if="reservationRequestError.length > 0"
        class="form-error"
      >{{reservationRequestError}}</p>

      <Button
        class="submit"
        v-if="checkboxSelectionEventGettogether || checkboxSelectionEventWedding"
        text="Absenden"
        @click="submit"
        :disable="reservationRequestPending"
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
    };
  },
  computed: {
    reservationRequestPending() {
      return this.$store.getters.reservationRequestPending;
    },
    reservationRequestError() {
      return this.$store.getters.reservationRequestError;
    },
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

      // make sure name of person 1 is set
      if (this.$store.getters.name1 < 1) {
        this.formIsValid = false;
        this.formError = 'Name bei Peson 1 fehlt';
        return;
      }

      if (this.checkboxSelectionEventWedding) {
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

      this.$store.commit('setReservationRequestError', '');
      this.$store.commit('setReservationRequestPending', true);
      this.$emit('submit');
    },
  },
};
</script>

<style scoped lang="scss">

.form {
  margin-top: pxToRem(48);
  margin-bottom: pxToRem($interModuleSpacingMobile);
}

fieldset {
  background-color: $colorBride;
  padding: pxToRem($interElementSpacing);
}

fieldset:first-child {
  box-shadow: 0px pxToRem(80) pxToRem(200) 0px rgba(30, 76, 106, .1);
}

fieldset:not(:first-child) {
  margin-top: pxToRem(16);
}

.radio-checkbox-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @include mq-medium {
    flex-wrap: nowrap;
  }
}

.checkboxes {
  margin-right: pxToRem(12);
  width: 100%;

  @include mq-medium {
    width: 100%;
  }
}

.checkboxes.checked {
  @include mq-medium {
    width: auto;
  }
}
.radios {
  margin-top: pxToRem($interElementSpacing);

  @include mq-medium {
    margin-top: 0;
  }
}

.persons-wrapper {
  margin-top: pxToRem($offsetMobile);
  border-top: 1px dashed $colorBridesMaid;

  @include mq-medium {
    padding: 0 pxToRem(70);
  }
}

.person-details {
  margin: pxToRem($offsetMobile) 0 0;
}

.form-error {
  @include form-error;
  padding: pxToRem(10) 0 0;
}

.submit {
  margin-top: pxToRem($offsetMobile);
}

</style>
