<template>
  <div>
    <h1>Anmeldungen</h1>
    <p>
      <router-link to="/">Zurück zur Home</router-link>
    </p>

    <p>
      Total Anmeldungen: {{this.registrations.length}}<br>
    </p>

    <p v-if="error">Bei der Abfrage gab es einen Fehler. Bitte erneut versuchen.</p>

    <table v-if="!error && registrations.length > 0">
      <tr>
          <th>Name</th>
          <th>Get together</th>
          <th>Feier</th>
          <th>Essen</th>
          <th>Allergien</th>
          <th>Person 2</th>
          <th>Essen</th>
          <th>Allergien</th>
      </tr>
       <tr v-for="reg in registrations" :key="reg.id">
         <td>{{reg.name}}</td>
         <td>{{reg.getTogether.join ? reg.getTogether.persons : '-'}}</td>
         <td>{{reg.wedding.join ? reg.wedding.persons : '-'}}</td>
         <td>{{reg.wedding.join ? reg.wedding.food : '-'}}</td>
         <td>{{
           reg.wedding.join && reg.wedding.alergics.length > 0 ? reg.wedding.alergics : '-'
         }}</td>
         <td>{{reg.wedding.persons === '2' ? reg.wedding.person2.name : '-'}}</td>
         <td>{{reg.wedding.persons === '2' ? reg.wedding.person2.food : '-'}}</td>
         <td>{{
           reg.wedding.persons === '2' && reg.wedding.person2.alergics.length > 0
            ? reg.wedding.person2.alergics
            : '-'
         }}</td>

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
    };
  },
  created() {
    try {
      registrations.onSnapshot((data) => {
        const items = data.docs.map((doc) => {
          const item = doc.data();

          item.id = doc.id;

          return item;
        });

        this.registrations = items;
      });
    } catch {
      this.error = true;
    }
  },
};
</script>

<style scoped lang="scss">
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
