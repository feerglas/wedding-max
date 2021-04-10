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
          />

          <Radiogroup
            v-if="checkboxSelectionEventGettogether"
            :radios="radioDataGettogether"
            v-model="radioSelectionGettogether"
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
          />

          <Radiogroup
            v-if="checkboxSelectionEventWedding"
            :radios="radioDataWedding"
            v-model="radioSelectionWedding"
          />
        </div>

        <PersonDetails />

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
</style>
