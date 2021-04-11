<template>
  <div class="step2">

    <h1 class="title-1">Du verpasst was</h1>

    <p>Schade, dass du nicht dabei sein kannst.</p>

    <p>Melde dich bei uns, falls du es dir doch noch anders überlegst.</p>

    <ContactItems :items="contactItemsData" />

  </div>
</template>

<script>
import ContactItems from '@/components/ContactItems.vue';
import contactData from '@/data/contactItems';

export default {
  name: 'RegistrationCancel',
  components: {
    ContactItems,
  },
  data() {
    return {
      contactItemsData: {
        sections: [
          {
            title: 'Melde dich bei uns, falls du es dir doch noch anders überlegst.',
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
