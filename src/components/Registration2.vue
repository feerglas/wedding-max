<template>
  <div>
    <h1>Ich nehme gerne teil</h1>

    <form>

      <!-- Get together -->
      <fieldset>

        <Checkbox
          value="gettogether"
          label="Get together"
          sublabel="Freitag, 20.08.2021"
          v-model="checkboxSelectionEventGettogether"
        />

        <br>

        <Radiogroup
          :radios="radioDataGettogether"
          v-model="radioSelectionGettogether"
        />

      </fieldset>

      <!-- Wedding -->
      <fieldset>

        <Checkbox
          value="wedding"
          label="Hochzeitsfeier"
          sublabel="Samstag, 20.08.2021"
          v-model="checkboxSelectionEventWedding"
        />

        <br>

        <Radiogroup
          :radios="radioDataWedding"
          v-model="radioSelectionWedding"
        />

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

</style>
