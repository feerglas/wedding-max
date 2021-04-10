<template>
  <div class="wrapper">
    <router-link
      to="/"
      class="logo"
    >
      <Logo />
    </router-link>

    <div class="header">
      <Icon
        class="header-icon"
        name="Registration"
      />
    </div>

    <div class="main">
      <Registration1
        v-if="!finishedStep1 && !finishedStep2 && !canceledStep1"
        @submit="submitStep1"
        @cancel="cancelStep1"
      />

      <Registration2
        v-if="finishedStep1 && !finishedStep2 && !canceledStep1"
        @submit="submitStep2"
      />

      <div v-if="finishedStep1 && finishedStep2 && !canceledStep1">
        finished, thx for registration
      </div>

      <div v-if="canceledStep1">
        oh, what a pitty you can't join
      </div>
    </div>

  </div>
</template>

<script>
import { addRegistration } from '@/firebase/registrations';
import Registration1 from '@/components/Registration1.vue';
import Registration2 from '@/components/Registration2.vue';
import Logo from '@/components/Logo.vue';
import Icon from '@/components/Icon.vue';

export default {
  name: 'Registration',
  components: {
    Registration1,
    Registration2,
    Logo,
    Icon,
  },
  data() {
    return {
      finishedStep1: false,
      finishedStep2: false,
      canceledStep1: false,
    };
  },
  methods: {
    submitStep1() {
      this.$store.commit('setReservationRequestError', '');
      this.finishedStep1 = true;
    },
    async cancelStep1() {
      const name = this.$store.getters.name1;
      const { reservation } = this.$store.getters;

      reservation.name = name;

      this.$store.commit('setReservationRequestPending', true);

      const add = await addRegistration(reservation);

      if (!add) {
        this.$store.commit('setReservationRequestPending', false);
        this.$store.commit('setReservationRequestError', 'Es gab einen Fehler beim Speichern. Bitte versuche es erneut.');

        return;
      }

      this.canceledStep1 = true;
      this.$store.dispatch('resetStore');
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

      this.$store.dispatch('resetStore');
      this.$store.commit('setReservationRequestError', '');

      this.finishedStep2 = true;
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-wrap: wrap;
  position: relative;

  @include mq-desktop {
    flex-wrap: nowrap;
  }
}

.logo {
  flex-basis: 100%;

  @include mq-desktop {
    position: absolute;
    top: 0;
    right: 0;
    width: pxToRem(290);
    height: pxToRem(35);
  }

}

.header {
  display: flex;
  justify-content: center;
  flex-basis: 100%;
  background: $gradient;

  @include mq-desktop {
    flex: pxToRem(328) 0 0;
    height: 100vh;
  }
}

.header-icon {
  height: pxToRem(125);
  margin: pxToRem(30);

  @include mq-desktop {
    height: pxToRem(170);
    margin: pxToRem(190) 0;
  }
}

.main {
  flex-basis: 100%;
}
</style>
