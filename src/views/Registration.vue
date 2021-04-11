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

    <main class="conent-container">
      <transition name="fade" v-on:before-leave="beforeLeave">
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
          <RegistrationFinished />
        </div>

        <div v-if="canceledStep1">
          <RegistrationCancel />
        </div>
      </transition>
    </main>

  </div>
</template>

<script>
import { addRegistration } from '@/firebase/registrations';
import Registration1 from '@/components/Registration1.vue';
import Registration2 from '@/components/Registration2.vue';
import Logo from '@/components/Logo.vue';
import Icon from '@/components/Icon.vue';
import RegistrationFinished from '@/components/RegistrationFinished.vue';
import RegistrationCancel from '@/components/RegistrationCancel.vue';

export default {
  name: 'Registration',
  components: {
    Registration1,
    Registration2,
    Logo,
    Icon,
    RegistrationFinished,
    RegistrationCancel,
  },
  data() {
    return {
      finishedStep1: false,
      finishedStep2: false,
      canceledStep1: false,
    };
  },
  methods: {
    beforeLeave(el) {
      el.setAttribute('style', 'height: 0; overflow: visible; margin-bottom: 0');
    },
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

      this.$store.dispatch('resetStore');
      this.canceledStep1 = true;
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
$animationDuration: 500ms;
$animationEasing: ease-in-out;

.conent-container {
  @include layout-column-main;

  margin-bottom: 0;
  overflow: visible;

  @include mq-desktop {
    margin-left: pxToRem(440);
  }
}

.wrapper {
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  position: relative;
  background: rgba(30, 76, 106, .03);

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
    position: fixed;
    width: pxToRem(328);
    flex: pxToRem(328) 0 0;
    min-height: 100vh;
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

.fade-enter-active,
.fade-leave-active {
  transition:
    transform $animationDuration $animationEasing,
    opacity $animationDuration $animationEasing;
}

.fade-enter {
  opacity: 0;
  transform: translateX(-500px);

  @include mq-desktop {
    transform: translateY(500px);
  }
}

.fade-enter-to {
  opacity: 1;
  transform: translateX(0px);

  @include mq-desktop {
    transform: translateY(0px);
  }
}

.fade-leave {
  opacity: 1;
  transform: translateX(0px);

  @include mq-desktop {
    transform: translateY(0px);
  }
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(300px);

  @include mq-desktop {
    transform: translateY(-300px);
  }
}

</style>
