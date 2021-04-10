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

    </form>

  </div>
</template>

<script>
import Checkbox from '@/components/Checkbox.vue';
import Radiogroup from '@/components/Radiogroup.vue';
import PersonDetails from '@/components/PersonDetails.vue';

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
  },
  data() {
    return {
      radioSelectionGettogether: '1',
      radioSelectionWedding: '1',
      checkboxSelectionEventGettogether: false,
      checkboxSelectionEventWedding: false,
      radioDataWedding,
      radioDataGettogether,
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
</style>
