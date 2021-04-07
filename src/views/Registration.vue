<template>
  <div>
    <p>Registration Page</p>
    <router-link to="/">Link back to detail</router-link><br>
    <router-link to="/confirmation">Link to confirmation</router-link>

    <button @click="submit">submit</button>
  </div>
</template>

<script>
import { registrations } from '@/firebase/';

export default {
  name: 'Registration',
  components: {},
  methods: {
    async submit() {
      try {
        await registrations.add({
          person1: {
            name: 'Hans Muster',
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

        await registrations.add({
          person1: {
            name: 'Foo Bar',
            food: 'Pasta',
            alergics: false,
            gettogether: true,
            wedding: true,
          },
        });
      } catch (e) {
        console.log('ERROR ADDING ENTRY');
        console.log(e);
      }
    },
  },
};
</script>
