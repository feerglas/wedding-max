<template>
  <div>
    <h1>Anmeldungen</h1>
    <p>
      <router-link to="/">Zurück zur Home</router-link>
    </p>

    <p>
      Total Anmeldungen: {{this.registrations.length}}<br>
      Total Personen: {{this.registrationPeople}}
    </p>

    <p v-if="error">Bei der Abfrage gab es einen Fehler. Bitte erneut versuchen.</p>

    <table v-if="!error && registrations.length > 0">
      <tr>
          <th>Anzahl</th>
          <th>Person 1</th>
          <th>Get together</th>
          <th>Feier</th>
          <th>Essen</th>
          <th>Allergien</th>
          <th>Person 2</th>
          <th>Get together</th>
          <th>Feier</th>
          <th>Essen</th>
          <th>Allergien</th>
      </tr>
       <tr v-for="registration in registrations" :key="registration.id">
         <td>{{registration.person2 ? '2' : '1'}}</td>
         <td>{{registration.person1.name}}</td>
         <td>{{registration.person1.gettogether ? 'x' : ''}}</td>
         <td>{{registration.person1.wedding ? 'x' : ''}}</td>
         <td>{{registration.person1.food}}</td>
         <td>{{registration.person1.alergics ? registration.person1.alergics : '-'}}</td>
         <td>{{registration.person2 ? registration.person2.name : '-'}}</td>
         <td>{{registration.person2 ? registration.person2.gettogether ? 'x' : '-' : '-'}}</td>
         <td>{{registration.person2 ? registration.person2.wedding ? 'x' : '-' : '-'}}</td>
         <td>{{registration.person2 ? registration.person2.food : '-'}}</td>
         <td>{{registration.person2 ? registration.person2.alergics : '-'}}</td>
       </tr>
    </table>
  </div>
</template>

<script>
import { registrations } from '@/firebase/';

export default {
  name: 'Summary',
  components: {},
  data() {
    return {
      error: false,
      registrations: [],
      registrationPeople: 0,
    };
  },
  async created() {
    try {
      const data = await registrations.get();
      this.registrations = data.docs.map((doc) => {
        const item = doc.data();

        item.id = doc.id;

        if (item.person2) {
          this.registrationPeople += 2;
        } else {
          this.registrationPeople += 1;
        }

        return item;
      });
    } catch (e) {
      this.error = true;
      this.registrations = [];
    }
  },
};
</script>

<style>
table {
  border-collapse: collapse;
  width: 100%;
  margin: 2rem 0;
}

td, th {
  border: 1px solid black;
  text-align: center;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: rgba(1, 1, 1, 0.1);
}
</style>
