<template>
  <div>
    <router-link to="/">
      <Logo />
    </router-link>

    <Registration1 />
    <Registration2 />

    <button @click="submit">submit</button>
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
  methods: {
    async submit() {
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
    },
  },
};
</script>
