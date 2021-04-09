<template>
  <div>
    <h1>Ich nehme gerne teil</h1>

    <form>

      <fieldset>

        <!-- Get together -->
        <Checkbox
          value="gettogether"
          label="Get together"
          sublabel="Freitag, 20.08.2021"
          v-model="checkboxSelectionEventGettogether"
        />

        <!-- Wedding -->
        <Checkbox
          value="wedding"
          label="Hochzeitsfeier"
          sublabel="Samstag, 20.08.2021"
          v-model="checkboxSelectionEventWedding"
        />

        <br><br>
        <Radiogroup
          :radios="radioData"
          v-model="radioSelectionWedding"
        />

      </fieldset>

    </form>

  </div>
</template>

<script>
import Checkbox from '@/components/Checkbox.vue';
import Radiogroup from '@/components/Radiogroup.vue';

export default {
  name: 'Registration2',
  components: {
    Checkbox,
    Radiogroup,
  },
  props: {},
  data() {
    return {
      radioSelectionWedding: '1',
      checkboxSelectionEventGettogether: false,
      checkboxSelectionEventWedding: false,
      radioData: {
        id: 'weddingPersons',
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
      },
    };
  },
};
</script>

<style scoped lang="scss">

</style>
