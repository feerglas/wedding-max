<template>
  <div class="step2">

    <h1 class="title-1">Dankeschön</h1>

    <p class="text-1">
        Du bist somit angemeldet / Ihr seid somit angemeldet.
        Wir freuen uns, dass du mit uns feierst / ihr mit uns feiert.
    </p>

    <CalendarExports />

    <h2 class="title-2">Hast du noch Fragen?</h2>

    <ContactItems :items="contactItemsData" />

  </div>
</template>

<script>
import CalendarExports from '@/components/CalendarExports.vue';
import ContactItems from '@/components/ContactItems.vue';
import contactData from '@/data/contactItems';

export default {
  name: 'RegistrationFinished',
  components: {
    CalendarExports,
    ContactItems,
  },
  data() {
    return {
      contactItemsData: {
        sections: [
          {
            title: 'Trauzeugen',
            items: [
              contactData.lenna,
              contactData.niklas,
            ],
          },
          {
            title: 'Brautpaar',
            items: [
              contactData.sarah,
              contactData.max,
            ],
          },
        ],
      },
    };
  },
};
</script>

<style scoped lang="scss">
.step1 {
  margin-bottom: pxToRem($interModuleSpacingMobile);
}
</style>
