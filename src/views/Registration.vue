<template>
  <div>
    <p>Registration Page</p>
    <router-link to="/">Link back to detail</router-link><br>
    <router-link to="/confirmation">Link to confirmation</router-link>

    <button @click="submit">submit</button>

    <Registration1 />
  </div>
</template>

<script>
import { addRegistration } from '@/firebase/registrations';
import Registration1 from '@/components/Registration1.vue';

export default {
  name: 'Registration',
  components: {
    Registration1,
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
