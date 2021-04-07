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
        // check if entry already exists
        const nameToSubmit = 'Petra Muster 2';
        let alreadyThere = false;
        const data = await registrations.get();
        this.registrations = data.docs.forEach((doc) => {
          const item = doc.data();

          if (item.person1.name === nameToSubmit) {
            alreadyThere = true;
          }

          if (item.person2 && item.person2.name === nameToSubmit) {
            alreadyThere = true;
          }
        });

        if (alreadyThere) {
          return;
        }

        // add the entry
        await registrations.add({
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
      } catch (e) {
        console.log('ERROR ADDING ENTRY');
        console.log(e);
      }
    },
  },
};
</script>
