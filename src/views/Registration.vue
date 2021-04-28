<template>
  <div class="wrapper">
    <Header class="logo" />

    <div class="header">
      <transition-group name="icon" v-on:before-leave="beforeLeaveIcon">
        <div v-if="!finishedStep2 && !canceledStep1" key="1">
          <Icon
          class="header-icon"
          name="Registration"
          />
        </div>

        <div v-if="finishedStep1 && finishedStep2 && !canceledStep1" key="2">
          <Icon
          class="header-icon"
          name="RegistrationFinish"
          />
        </div>

        <div v-if="canceledStep1" key="3">
          <Icon
          class="header-icon"
          name="RegistrationCancel"
          />
        </div>
      </transition-group>
    </div>

    <main class="content-container">
      <transition name="content" v-on:before-leave="beforeLeave">
        <Registration1
          v-if="!finishedStep1 && !finishedStep2 && !canceledStep1"
          @submit="submitStep1"
          @cancel="cancelStep1"
        />

        <Registration2
          v-if="finishedStep1 && !finishedStep2 && !canceledStep1"
          @submit="submitStep2"
        />

        <RegistrationFinished v-if="finishedStep1 && finishedStep2 && !canceledStep1" />

        <RegistrationCancel v-if="canceledStep1" />

      </transition>

    </main>

  </div>
</template>

<script>
import Registration1 from '@/components/Registration1.vue';
import Registration2 from '@/components/Registration2.vue';
import Icon from '@/components/Icon.vue';
import Header from '@/components/Header.vue';
import RegistrationFinished from '@/components/RegistrationFinished.vue';
import RegistrationCancel from '@/components/RegistrationCancel.vue';
import { registrations } from '@/firebase/';
import defaultReservation from '../store/defaultState';

export default {
  name: 'Registration',
  components: {
    Registration1,
    Registration2,
    Icon,
    Header,
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
      window.scrollTo({ top: 0, behavior: 'smooth' });

      el.setAttribute('style', 'height: 0; overflow: visible; margin-bottom: 0');
    },
    beforeLeaveIcon(el) {
      el.setAttribute('style', 'height: 0; overflow: visible; margin-bottom: 0');
    },
    submitStep1() {
      this.$store.commit('setReservationRequestError', '');
      this.finishedStep1 = true;
    },
    async cancelStep1() {
      const name = this.$store.getters.name1;
      const reservation = JSON.parse(JSON.stringify(defaultReservation));

      reservation.name = name;

      this.$store.commit('setReservationRequestPending', true);

      let add;
      try {
        await registrations.add(reservation);
        add = true;
      } catch {
        add = false;
      }

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

      let add;
      try {
        await registrations.add(state);
        add = true;
      } catch {
        add = false;
      }

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
$bgColor: rgb(248, 249, 250);

.logo {
  color: $bgColor;
}

.content-container {
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
  background: $bgColor;

  @include mq-desktop {
    flex-wrap: nowrap;
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

// State Transitions

.content-enter-active,
.content-leave-active {
  // transition:
    // transform $animationDuration $animationEasing,
    // opacity $animationDuration $animationEasing;
}

.content-enter {
  // opacity: 0;
  //transform: translateY(500px);
}

.content-enter-to {
  // opacity: 1;
  //transform: translateY(0px);
}

.content-leave {
  // opacity: 1;
  //transform: translateY(0px);
}

.content-leave-to {
  // opacity: 0;
  //transform: translateY(-300px);
}

.icon-enter-active,
.icon-leave-active {
  // transition: opacity $animationDuration $animationEasing;
}

.icon-enter {
  // opacity: 0;
}

.icon-enter-to {
  // opacity: 1;
}

.icon-leave {
  // opacity: 1;
}

.icon-leave-to {
  // opacity: 0;
}

</style>
