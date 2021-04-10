<template>
  <div>
    <router-link to="/">
      <Logo />
    </router-link>

    <Registration1
      @submit="submitStep1"
      @cancel="cancelStep1"
    />

    <Registration2 @submit="submitStep2"/>

  </div>
</template>

<script>
// import { addRegistration } from '@/firebase/registrations';
import Registration1 from '@/components/Registration1.vue';
import Registration2 from '@/components/Registration2.vue';
import Logo from '@/components/Logo.vue';

export default {
  name: 'Registration',
  components: {
    Registration1,
    Registration2,
    Logo,
  },
  data() {
    return {
      finishedStep1: false,
      canceledStep1: false,
    };
  },
  methods: {
    submitStep1() {
      console.log('step 1 go');
    },
    cancelStep1() {
      console.log('step 1 cancel');
    },
    async submitStep2() {
      const state = this.$store.getters.reservation;

      // set names
      state.name = this.$store.getters.name1;
      state.wedding.person2.name = this.$store.getters.name2;

      console.log(JSON.parse(JSON.stringify(state)));

      /*
      await addRegistration({
        person1: {
          name: 'Hans Muster 2',
          food: 'Pasta',
          alergics: false,
          gettogether: true,
          wedding: true,
        },
        person2: {
          name: 'Petra Muster',
          food: 'Fries',
          alergics: 'Some of them, like Fish, Lactose',
          gettogether: false,
          wedding: true,
        },
      });
      */
    },
  },
};
</script>
