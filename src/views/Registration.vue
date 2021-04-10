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
import { addRegistration } from '@/firebase/registrations';
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

      const add = await addRegistration(state);

      if (!add) {
        this.$store.commit('setReservationRequestPending', false);
        this.$store.commit('setReservationRequestError', 'Es gab einen Fehler beim Speichern. Bitte versuche es erneut.');

        return;
      }

      this.$store.commit('setReservationRequestError', '');
    },
  },
};
</script>
